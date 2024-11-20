import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/config/const.dart';
import 'package:jiron_anime/models/tag.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/shared/auth_controller.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/pages/home/store/widgets/product_buttonbar.dart';
import 'package:jiron_anime/pages/home/store/widgets/product_item.dart';
import 'package:jiron_anime/pages/home/store/widgets/product_carousel.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';

final ProductoController productoController = Get.put(ProductoController());

class TiendaPage extends StatefulWidget {
  const TiendaPage({super.key});

  @override
  State<TiendaPage> createState() => _TiendaPageState();
}

class _TiendaPageState extends State<TiendaPage> {
  final _currentTags = <Tag>[].obs;

  int page = 1;

  Future<void> _loadData() async {
    if (_currentTags.isEmpty) {
      await productoController.obtenerProductosRecientes(page);
    } else {
      await productoController.obtenerProductosPorGenero(_currentTags, page);
    }
  }

  void _handlePageForward() {
    setState(() => page++);
  }

  void _handlePageBackward() {
    setState(() => page--);
  }

  Future<void> _changeTagsCallback(List<Tag> tags) async {
    _currentTags.value = tags;

    await _loadData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: Obx(
          () => FutureBuilder(
            future: _loadData(),
            builder: (context, snapshot) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return const Center(child: CircularProgressIndicator());
              } else if (snapshot.hasError) {
                return Center(child: Text('Error: ${snapshot.error}'));
              } else {
                return SingleChildScrollView(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            "Jiron Anime",
                            style: Theme.of(context).textTheme.titleLarge,
                          ),
                          AuthController.getAvatarIcon(),
                        ],
                      ),
                      15.pv,
                      TagsBarButton(
                        onTagPressed: _changeTagsCallback,
                      ),
                      15.pv,
                      const ProductCarousel(),
                      10.pv,
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            "Novedades de la semana",
                            style: Theme.of(context).textTheme.titleMedium,
                          ),
                        ],
                      ),
                      5.pv,
                      _buildProductoList(_currentTags),
                      5.pv,
                      if (productoController.productos.isNotEmpty)
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            ElevatedButton(
                              onPressed: page > 1 ? _handlePageBackward : null,
                              style: ElevatedButton.styleFrom(
                                foregroundColor: Colors.white,
                                backgroundColor: page > 1
                                    ? AppColors.primaryColor
                                    : Colors.grey.shade400,
                              ),
                              child: const Text("<"),
                            ),
                            10.ph,
                            Text("Página $page"),
                            10.ph,
                            ElevatedButton(
                              onPressed: productoController.productos.length >
                                      ConstValues.RESULTS_PER_PAGE
                                  ? _handlePageForward
                                  : null,
                              style: ElevatedButton.styleFrom(
                                foregroundColor: Colors.white,
                                backgroundColor:
                                    productoController.productos.length >
                                            ConstValues.RESULTS_PER_PAGE
                                        ? AppColors.primaryColor
                                        : Colors.grey.shade400,
                              ),
                              child: const Text(">"),
                            ),
                          ],
                        ),
                      30.pv,
                      const Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            "Contáctanos por ...",
                            style: TextStyle(
                                fontWeight: FontWeight.bold, fontSize: 18),
                            textAlign: TextAlign.center,
                          ),
                        ],
                      ),
                      15.pv,
                      const Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.facebook),
                          SizedBox(width: 20),
                          Icon(Icons.phone),
                          SizedBox(width: 20),
                          Icon(Icons.sms),
                        ],
                      ),
                      15.pv,
                      const Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            "Jiron anime - Todos los derechos reservados",
                            style: TextStyle(
                                fontWeight: FontWeight.bold, fontSize: 12),
                            textAlign: TextAlign.center,
                          ),
                        ],
                      ),
                    ],
                  ),
                );
              }
            },
          ),
        ),
      ),
    );
  }

  Widget _buildProductoList(List<Tag> tags) {
    if (productoController.productos.isEmpty) {
      return Text(
        "No hay mangas disponibles",
        style: Theme.of(context).textTheme.titleMedium,
      );
    }

    return GridView.builder(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 0.45,
        crossAxisSpacing: 10,
      ),
      itemCount: productoController.productos.length - 2,
      itemBuilder: (context, index) {
        final producto = productoController.productos[index];
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 10),
          child: ProductItem(producto: producto),
        );
      },
    );
  }
}
