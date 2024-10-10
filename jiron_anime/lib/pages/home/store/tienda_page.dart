import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/tags_controller.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/pages/home/store/widgets/bar_button.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/pages/home/store/widgets/list_comic.dart';
import 'package:jiron_anime/pages/home/store/widgets/slider_comic.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';

final ProductoController productoController = Get.put(ProductoController());
final TagController tagController = Get.put(TagController());

class TiendaPage extends StatefulWidget {
  const TiendaPage({super.key});

  @override
  _TiendaPageState createState() => _TiendaPageState();
}

class _TiendaPageState extends State<TiendaPage> {
  List<String> _currentTags = [];

  Future<void> _loadData() async {
    await productoController.obtenerProductos();
  }

  @override
  void initState() {
    super.initState();
    _currentTags.add("Shonen"); // Muestra Shonen por defecto
  }

  void _showAllMangas() {
    setState(() {
      _currentTags = []; // No filtrar por etiquetas
    });
  }

  void _showShonenMangas() {
    setState(() {
      _currentTags = ["Shonen"]; // Filtrar solo por Shonen
    });
  }

  void _showSeinenMangas() {
    setState(() {
      _currentTags = ["Seinen"]; // Filtrar solo por Seinen
    });
  }

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
                      padding: const EdgeInsets.symmetric(
                          vertical: 0, horizontal: 10),
                      decoration: BoxDecoration(
                        color: AppColors.primaryColor,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: BarButton(
                        onCatalogPressed: _showAllMangas,
                        onShonenPressed: _showShonenMangas,
                        onSeinenPressed: _showSeinenMangas,
                      ),
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
                    // Filtra mangas según los tags actuales
                    _buildMangaList(_currentTags),
                    30.pv,
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

Widget _buildMangaList(List<String> tags) {
  final filteredMangas = productoController.productos
      .where((manga) {
        if (tags.isEmpty) return true; 
        return manga.productTags!.any((tag) =>
            tags.contains(tag.tag?.name)); 
      })
      .toList();

  if (filteredMangas.isEmpty) {
    return Center(child: Text("No hay mangas disponibles"));
  }

  return SingleChildScrollView(
    child: GridView.builder(
      physics: NeverScrollableScrollPhysics(), // Evita que el GridView sea desplazable
      shrinkWrap: true, // Permite que el GridView tome solo el espacio necesario
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2, // Número de columnas
        childAspectRatio: 0.45, // Ajusta la relación de aspecto según tus necesidades
        crossAxisSpacing: 10, // Espacio horizontal entre columnas// Espacio vertical entre filas
      ),
      itemCount: filteredMangas.length,
      itemBuilder: (context, index) {
        final manga = filteredMangas[index];
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 10),
          child: ListComic(manga: manga),
        );
      },
    ),
  );
}






}
