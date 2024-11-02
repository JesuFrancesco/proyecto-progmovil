import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/product/widget/descripcion.dart';
import 'package:jiron_anime/pages/home/store/product/widget/pregunta.dart';
import 'package:jiron_anime/pages/home/store/product/widget/stock.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/pages/home/search/widget/botones.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/pages/home/store/product/widget/info_comic.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/utils/fetch_and_render.dart';

class ProductoPage extends StatefulWidget {
  final Product producto;

  const ProductoPage({
    super.key,
    required this.producto,
  });

  @override
  State<ProductoPage> createState() => _ProductoPageState();
}

enum BotonesProducto {
  descripcionOption,
  stockOption,
  comentariosOption,
}

class _ProductoPageState extends State<ProductoPage> {
  final ProductoController productoController = Get.put(ProductoController());
  late Widget _body;

  late final Map<BotonesProducto, Widget Function()> _bodyWidgets;

  @override
  void initState() {
    super.initState();

    _bodyWidgets = {
      BotonesProducto.descripcionOption: () =>
          DescripcionProducto(producto: widget.producto),
      BotonesProducto.stockOption: () =>
          StockProducto(producto: widget.producto),
      BotonesProducto.comentariosOption: () =>
          PreguntasProducto(producto: widget.producto),
    };

    // initial body
    _body = _bodyWidgets[BotonesProducto.descripcionOption]!();
  }

  void _onBotonTapped(BotonesProducto opcion) {
    setState(() {
      _body = _bodyWidgets[opcion]!();
    });
  }

  Future<void> _loadData() async {
    await productoController.obtenerProductos();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: SingleChildScrollView(
          child: Column(
            children: [
              const CustomAppbar(title: ""),
              InfoComic(
                producto: widget.producto,
              ),
              30.pv,
              Botones(
                onDescripcion: () {
                  _onBotonTapped(BotonesProducto.descripcionOption);
                },
                onStock: () {
                  _onBotonTapped(BotonesProducto.stockOption);
                },
                onPreguntas: () {
                  _onBotonTapped(BotonesProducto.comentariosOption);
                },
              ),
              const Divider(
                color: Colors.grey,
                thickness: 1,
              ),
              _body,
              15.pv,
              const Row(
                children: [
                  Text(
                    "Lo más vendido",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                  ),
                ],
              ),
              15.pv,
              fetchAndRender(
                _loadData,
                Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: productoController.productos
                        .toList()
                        .map((manga) => SizedBox(
                              height: 150,
                              child: Image.asset(
                                  manga.productAttachments![0].imageUrl!),
                            ))
                        .toList()
                        .sublist(0, 3)),
              )
            ],
          ),
        ),
      ),
    );
  }
}
