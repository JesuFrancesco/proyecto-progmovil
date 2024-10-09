import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';
import 'package:jiron_anime/pages/home/search/widget/botones.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/pages/home/product/widget/descripcion.dart';
import 'package:jiron_anime/pages/home/product/widget/info_comic.dart';
import 'package:jiron_anime/pages/home/product/widget/pregunta.dart';
import 'package:jiron_anime/pages/home/product/widget/stock.dart';
import 'package:jiron_anime/utils/extensions.dart';

class ProductoPage extends StatefulWidget {
  final String comicName;
  final String comicImage;

  const ProductoPage({
    super.key,
    required this.comicName,
    required this.comicImage,
  });

  @override
  State<ProductoPage> createState() => _ProductoPageState();
}

class _ProductoPageState extends State<ProductoPage> {
  final ProductoController productoController = Get.put(ProductoController());
  Widget _currentContent = const Descripcion();

  // Métodos para mostrar contenido
  void _showDescripcion() {
    setState(() {
      _currentContent = const Descripcion();
    });
  }

  void _showStock() {
    setState(() {
      _currentContent = const Stock();
    });
  }

  void _showPreguntas() {
    setState(() {
      _currentContent = const Preguntas();
    });
  }

  void _navigateToHomePage() {
    Navigator.pop(
      context,
      MaterialPageRoute(builder: (context) => const TiendaPage()),
    );
  }

  Future<void> _loadData() async {
    await productoController.obtenerProductos();
  }

  @override
  void initState() {
    super.initState();
    _loadData();
    // _dataLoadingFuture =
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomPadding(
        child: SingleChildScrollView(
          child: Column(
            children: [
              kToolbarHeight.pv,
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back),
                    onPressed: _navigateToHomePage,
                  ),
                  CurrentUser.getCircleAvatar()
                ],
              ),
              15.pv,
              InfoComic(
                comicName: widget.comicName,
                comicImage: widget.comicImage,
              ),
              15.pv,
              Botones(
                onDescripcion: _showDescripcion,
                onStock: _showStock,
                onPreguntas: _showPreguntas,
              ),
              const Divider(
                color: Colors.grey,
                thickness: 1,
              ),
              _currentContent,
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
            ],
          ),
        ),
      ),
    );
  }
}
