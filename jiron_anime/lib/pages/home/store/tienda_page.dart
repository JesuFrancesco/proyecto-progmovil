import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/tags_controller.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/pages/home/store/widgets/bar_button.dart';
import 'package:jiron_anime/pages/home/store/widgets/list_comic.dart';
import 'package:jiron_anime/pages/home/store/widgets/slider_comic.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';

final ProductoController productoController = Get.put(ProductoController());
final TagController tagController = Get.put(TagController());

class TiendaPage extends StatefulWidget {
  const TiendaPage({super.key});

  @override
  State<TiendaPage> createState() => _TiendaPageState();
}

class _TiendaPageState extends State<TiendaPage> {
  List<String> _currentTags = [];

  Future<void> _loadData() async {
    await productoController.obtenerProductos();
  }

  @override
  void initState() {
    super.initState();
  }

  void _showAllMangas() {
    setState(() {
      _currentTags = [];
    });
  }

  void _showShonenMangas() {
    setState(() {
      _currentTags = ["Shonen"];
    });
  }

  void _showSeinenMangas() {
    setState(() {
      _currentTags = ["Seinen"];
    });
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
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
                    CurrentUser.getAvatarIcon(),
                  ],
                ),
                15.pv,
                Container(
                  padding:
                      const EdgeInsets.symmetric(vertical: 0, horizontal: 10),
                  decoration: BoxDecoration(
                    color: AppColors.primaryColor,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: TagsBarButton(
                    onCatalogPressed: _showAllMangas,
                    onShonenPressed: _showShonenMangas,
                    onSeinenPressed: _showSeinenMangas,
                  ),
                ),
                15.pv,
                const SliderComic(),
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
                _buildMangaList(_currentTags),
                30.pv,
                const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Contáctanos por ...",
                      style:
                          TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
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
                      style:
                          TextStyle(fontWeight: FontWeight.bold, fontSize: 12),
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              ],
            ),
          );
        }
      },
    );
  }

  Widget _buildMangaList(List<String> tags) {
    final filteredMangas = productoController.productos.where((manga) {
      if (tags.isEmpty) return true;
      return manga.productTags!.any((tag) => tags.contains(tag.tag?.name));
    }).toList();

    if (filteredMangas.isEmpty) {
      return const Center(child: Text("No hay mangas disponibles"));
    }

    return GridView.builder(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 0.45,
        crossAxisSpacing: 10,
      ),
      itemCount: filteredMangas.length,
      itemBuilder: (context, index) {
        final manga = filteredMangas[index];
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 10),
          child: ListComic(manga: manga),
        );
      },
    );
  }
}
