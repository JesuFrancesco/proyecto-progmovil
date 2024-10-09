import 'package:flutter/material.dart';
import 'package:jiron_anime/middleware/usuario_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';
import 'package:jiron_anime/pages/home/store/widgets/custom_padding.dart';
import 'package:jiron_anime/pages/home/store/widgets/list_comic.dart';

class BusquedaPage extends StatefulWidget {
  const BusquedaPage({super.key});

  @override
  State<BusquedaPage> createState() => _BusquedaPageState();
}

class _BusquedaPageState extends State<BusquedaPage> {
  String searchQuery = '';

  final List<Product> mangas = mangaController.productos.toList();

  List<Product> filteredMangas = [];

  @override
  void initState() {
    super.initState();
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
    return Scaffold(
      body: CustomPadding(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back),
                    onPressed: () {
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(builder: (context) => TiendaPage()),
                      );
                    },
                  ),
                  const Text(
                    "Busqueda",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25),
                  ),
                  CircleAvatar(
                    child: CurrentUser.profileImageUrl != null
                        ? Image.network(
                            CurrentUser.profileImageUrl!,
                            width: 100,
                            height: 100,
                            fit: BoxFit.cover,
                          )
                        : null,
                  ),
                ],
              ),
              const SizedBox(height: 20),
              // Barra de búsqueda
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: Row(
                  children: [
                    Expanded(
                      child: TextField(
                        onChanged: (value) {
                          searchQuery = value;
                        },
                        decoration: InputDecoration(
                          hintText: 'Buscar manga...',
                          prefixIcon: const Icon(Icons.search),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(30),
                            borderSide: const BorderSide(color: Colors.grey),
                          ),
                          filled: true,
                          fillColor: Colors.grey[200],
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    ElevatedButton(
                      onPressed: _onSearchPressed,
                      child: const Text("Buscar"),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),

              SizedBox(
                height: 440,
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: filteredMangas.length,
                  itemBuilder: (context, index) {
                    final manga = filteredMangas[index];
                    return Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 10),
                      child: ListComic(manga: manga),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
