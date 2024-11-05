import 'package:flutter/material.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';
import 'package:jiron_anime/pages/home/store/widgets/product_item.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/utils/show_dialog.dart';

class BusquedaPage extends StatefulWidget {
  const BusquedaPage({super.key});

  @override
  State<BusquedaPage> createState() => _BusquedaPageState();
}

class _BusquedaPageState extends State<BusquedaPage> {
  late List<Product> filteredProductos = [];
  String searchQuery = '';
  int page = 1;
  bool isLoading = false;
  bool hizoQuery = false;

  @override
  void initState() {
    super.initState();
  }

  Future<void> _searchProductos(String productName) async {
    setState(() {
      hizoQuery = true;
      isLoading = true;
    });

    await productoController.buscarProductos(productName, page);

    setState(() {
      filteredProductos = productoController.filteredProductos.toList();
      isLoading = false;
    });
  }

  void _onSearchPressed() async {
    if (searchQuery.isEmpty) {
      showAlert(context, "Por favor, ingresa un término de búsqueda.");
      return;
    }
    page = 1;
    await _searchProductos(searchQuery);
  }

  void _goToNextPage() async {
    setState(() {
      page++;
    });
    await _searchProductos(searchQuery);
  }

  void _goToPreviousPage() async {
    if (page > 1) {
      setState(() {
        page--;
      });
      await _searchProductos(searchQuery);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
            isLoading
                ? const Center(child: CircularProgressIndicator())
                : Column(
                    children: [
                      hizoQuery && filteredProductos.isEmpty
                          ? const Text("no hay nada")
                          : GridView.builder(
                              physics: const NeverScrollableScrollPhysics(),
                              shrinkWrap: true,
                              gridDelegate:
                                  const SliverGridDelegateWithFixedCrossAxisCount(
                                crossAxisCount: 2,
                                childAspectRatio: 0.45,
                                crossAxisSpacing: 10,
                              ),
                              itemCount: filteredProductos.length,
                              itemBuilder: (context, index) {
                                final manga = filteredProductos[index];
                                return Padding(
                                  padding:
                                      const EdgeInsets.symmetric(vertical: 10),
                                  child: ProductItem(manga: manga),
                                );
                              },
                            ),
                      20.pv,
                      if (filteredProductos.isNotEmpty)
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            ElevatedButton(
                              onPressed: page > 1 ? _goToPreviousPage : null,
                              style: ElevatedButton.styleFrom(
                                foregroundColor: Colors.white,
                                backgroundColor: page > 1
                                    ? AppColors.primaryColor
                                    : Colors.grey.shade400,
                              ),
                              child: const Text("<"),
                            ),
                            const SizedBox(width: 10),
                            Text("Página $page"),
                            const SizedBox(width: 10),
                            ElevatedButton(
                              onPressed: _goToNextPage,
                              style: ElevatedButton.styleFrom(
                                foregroundColor: Colors.white,
                                backgroundColor: AppColors.primaryColor,
                              ),
                              child: const Text(">"),
                            ),
                          ],
                        ),
                    ],
                  ),
          ],
        ),
      ),
    );
  }
}
