import 'package:flutter/material.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/pages/home/store/widgets/list_comic.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';

class BusquedaPage extends StatefulWidget {
  const BusquedaPage({super.key});

  @override
  State<BusquedaPage> createState() => _BusquedaPageState();
}

class _BusquedaPageState extends State<BusquedaPage> {
  late List<Product> mangas = [];
  List<Product> filteredMangas = [];
  String searchQuery = '';

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    await productoController.obtenerProductos();
    mangas = productoController.productos.toList();
    filteredMangas = mangas;
  }

  void _onSearchPressed() {
    setState(() {
      filteredMangas = mangas
          .where((manga) =>
              manga.name!.toLowerCase().contains(searchQuery.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return CustomLayout(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: SingleChildScrollView(
          child: Column(
            children: [
              const CustomAppbar(title: "Búsqueda"),
              20.pv,
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: Row(
                  children: [
                    Expanded(
                      child: TextField(
                        cursorColor: AppColors.primaryColor,
                        onChanged: (value) {
                          searchQuery = value;
                        },
                        decoration: InputDecoration(
                          prefixIcon: const Icon(Icons.search),
                          hintText: 'Buscar manga...',
                          hintStyle: TextStyle(color: Colors.grey[600]),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(30),
                            borderSide: const BorderSide(
                              color: AppColors.primaryColor,
                              width: 2,
                            ),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(30),
                            borderSide: const BorderSide(
                              color: AppColors.primaryColor,
                              width: 2,
                            ),
                          ),
                          filled: true,
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    ElevatedButton(
                      onPressed: _onSearchPressed,
                      style: ElevatedButton.styleFrom(
                        foregroundColor: Colors.white,
                        backgroundColor: AppColors.primaryColor,
                      ),
                      child: const Text("Buscar"),
                    ),
                  ],
                ),
              ),
              20.pv,
              GridView.builder(
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
              )
            ],
          ),
        ),
      ),
    );
  }
}
