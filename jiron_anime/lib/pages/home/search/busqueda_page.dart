import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/config/const.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';
import 'package:jiron_anime/pages/home/store/widgets/product_item.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
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
  final isLoading = false.obs;
  final hizoQuery = false.obs;

  @override
  void initState() {
    super.initState();
  }

  Future<void> _searchProductos(String productName) async {
    hizoQuery.value = true;
    isLoading.value = true;

    await productoController.obtenerProductosPorQuery(productName, page);

    setState(() {
      filteredProductos = productoController.queryProductos.toList();
    });

    isLoading.value = false;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: CustomLayout(
        child: Column(
          children: [
            const CustomAppbar(title: "Búsqueda"),
            10.pv,
            _buildSearchBar(),
            20.pv,
            Obx(
              () => Expanded(
                child: isLoading.value
                    ? const Center(child: CircularProgressIndicator())
                    : SingleChildScrollView(
                        child: Column(
                          children: [
                            if (hizoQuery.value && filteredProductos.isEmpty)
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 32),
                                child: Center(
                                  child: Text(
                                    "No hay resultados",
                                    style:
                                        Theme.of(context).textTheme.titleMedium,
                                  ),
                                ),
                              )
                            else
                              GridView.builder(
                                physics: const NeverScrollableScrollPhysics(),
                                shrinkWrap: true,
                                gridDelegate:
                                    const SliverGridDelegateWithFixedCrossAxisCount(
                                  crossAxisCount: 2,
                                  childAspectRatio: 0.45,
                                ),
                                itemCount: filteredProductos.length,
                                itemBuilder: (context, index) {
                                  final manga = filteredProductos[index];
                                  return Padding(
                                    padding: const EdgeInsets.symmetric(
                                        vertical: 10),
                                    child: ProductItem(producto: manga),
                                  );
                                },
                              ),
                            20.pv,
                            _buildPagination(),
                            20.pv,
                          ],
                        ),
                      ),
              ),
            ),
          ],
        ),
      ),
    );
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

  Widget _buildSearchBar() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              cursorColor: AppColors.primaryColor,
              onChanged: (value) {
                searchQuery = value;
              },
              onSubmitted: (value) {
                searchQuery = value;
                _onSearchPressed();
              },
              decoration: InputDecoration(
                prefixIcon: const Icon(Icons.search),
                hintText: 'Buscar producto...',
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
          10.ph,
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
    );
  }

  Widget _buildPagination() {
    if (!filteredProductos.isNotEmpty) return const SizedBox.shrink();

    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        ElevatedButton(
          onPressed: page > 1 ? _goToPreviousPage : null,
          style: ElevatedButton.styleFrom(
            foregroundColor: Colors.white,
            backgroundColor:
                page > 1 ? AppColors.primaryColor : Colors.grey.shade400,
          ),
          child: const Text("<"),
        ),
        10.ph,
        Text("Página $page"),
        10.ph,
        ElevatedButton(
          onPressed: filteredProductos.length > ConstValues.RESULTS_PER_PAGE
              ? _goToNextPage
              : null,
          style: ElevatedButton.styleFrom(
            foregroundColor: Colors.white,
            backgroundColor:
                filteredProductos.length > ConstValues.RESULTS_PER_PAGE
                    ? AppColors.primaryColor
                    : Colors.grey.shade400,
          ),
          child: const Text(">"),
        ),
      ],
    );
  }
}
