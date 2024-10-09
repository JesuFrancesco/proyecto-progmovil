// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/pages/home/store/widgets/bar_button.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/pages/home/store/widgets/list_comic.dart';
import 'package:jiron_anime/pages/home/store/widgets/slider_comic.dart';
import 'package:jiron_anime/utils/extensions.dart';

final ProductoController productoController = Get.put(ProductoController());

class TiendaPage extends StatelessWidget {
  Future<void> _loadData() async {
    await productoController.obtenerProductos();
  }

  const TiendaPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
        future: _loadData(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else {
            return CustomPadding(
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    // kToolbarHeight.pv,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          "Jiron Anime",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 36),
                        ),
                        CurrentUser.getCircleAvatar(),
                      ],
                    ),
                    15.pv,
                    Container(
                      padding: const EdgeInsets.symmetric(
                          vertical: 0, horizontal: 10),
                      decoration: BoxDecoration(
                        color: Colors.red,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const BarButton(),
                    ),
                    15.pv,
                    const SliderComic(),
                    1.pv,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: const [
                        Text(
                          "Novedades de la semana",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 18),
                        ),
                        Text(
                          "See all",
                          style: TextStyle(color: Colors.grey),
                        ),
                      ],
                    ),
                    30.pv,
                    _buildMangaList(0, 2),
                    _buildMangaList(2, 4),
                    _buildMangaList(4, 6),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Text(
                          "Tambien siguenos en ...",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 18),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                    15.pv,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Icon(Icons.sports_tennis),
                        SizedBox(width: 20),
                        Icon(Icons.youtube_searched_for),
                        SizedBox(width: 20),
                        Icon(Icons.person_4),
                      ],
                    ),
                    15.pv,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
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
              ),
            );
          }
        },
      ),
    );
  }

  Widget _buildMangaList(int start, int end) {
    return SizedBox(
      height: 440,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: productoController.productos
            .toList()
            .map((manga) => Row(
                  children: [
                    ListComic(manga: manga),
                    30.ph,
                  ],
                ))
            .toList()
            .sublist(start, end),
      ),
    );
  }
}
