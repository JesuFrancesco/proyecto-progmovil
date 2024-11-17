import 'package:async/async.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/controllers/tags_controller.dart';
import 'package:jiron_anime/controllers/wishlist_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/product/widget/producto_descripcion.dart';
import 'package:jiron_anime/pages/home/store/product/widget/producto_comentarios.dart';
import 'package:jiron_anime/pages/home/store/product/widget/product_stock.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/pages/home/search/widget/botones.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/pages/home/store/product/widget/product_info.dart';
import 'package:jiron_anime/shared/small_circular_indicator.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';

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
  final _memoizer = AsyncMemoizer();

  final productoController = Get.put(ProductoController(), permanent: true);
  final wishlistController = Get.put(WishlistController(), permanent: true);
  final tagController = Get.put(TagController(), permanent: true);

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
    setState(() => _body = _bodyWidgets[opcion]!());
  }

  Future<void> _obtenerProductosPorGenero() async {
    return _memoizer.runOnce(() async {
      await tagController.obtenerTagsDeProducto(widget.producto.id!);
      await productoController.obtenerProductosPorGenero(
          tagController.currentProductTags.map((e) => e.tag!).toList(), 1);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: SingleChildScrollView(
          child: Column(
            children: [
              const CustomAppbar(),
              ProductoInfo(
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
                thickness: 1,
              ),
              _body,
              15.pv,
              const Row(
                children: [
                  Text(
                    "También te puede interesar...",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                  ),
                ],
              ),
              15.pv,
              FutureBuilder(
                future: _obtenerProductosPorGenero(),
                builder: (ctx, snapshot) =>
                    snapshot.connectionState == ConnectionState.waiting
                        ? const SmallCircularIndicator()
                        : ProductosSimilaresWidget(
                            productoController: productoController),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class ProductosSimilaresWidget extends StatelessWidget {
  const ProductosSimilaresWidget({
    super.key,
    required this.productoController,
  });

  final ProductoController productoController;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: productoController.productos
                .toList()
                .expand(
                  (producto) => [
                    GestureDetector(
                      onTap: () {
                        Navigator.of(context).pushReplacement(MaterialPageRoute(
                            builder: (context) =>
                                ProductoPage(producto: producto)));
                      },
                      child: Column(
                        children: [
                          SizedBox(
                            height: 200,
                            child: Image.network(
                                producto.productAttachments![0].imageUrl!),
                          ),
                          Text(
                            producto.name!,
                            style: Theme.of(context)
                                .textTheme
                                .titleSmall!
                                .copyWith(fontSize: 10),
                          )
                        ],
                      ),
                    ),
                    10.ph,
                  ],
                )
                .take(15)
                .toList()),
      ),
    );
  }
}
