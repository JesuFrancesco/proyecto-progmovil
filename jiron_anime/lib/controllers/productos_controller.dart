import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/product_service.dart';

class ProductoController extends GetxController {
  ProductoService service = ProductoService();
  final isLoading = false.obs;
  final productos = <Product>[].obs;
  final queryProductos = <Product>[].obs;

  Future<void> obtenerProductosRecientes(int page) async {
    try {
      isLoading.value = true;
      productos.value = await service.fetchRecent(page);
    } catch (e) {
      // HANDLE ERRORS
    } finally {
      isLoading.value = false;
    }
  }

  Future<void> obtenerProductosPorGenero(List<Tag> tags, int page) async {
    try {
      isLoading.value = true;
      productos.value = await service.fetchProductsByGenre(tags, page);
    } catch (e) {
      // HANDLE ERRORS
    } finally {
      isLoading.value = false;
    }
  }

  Future<void> obtenerProductosPorQuery(String productName, int page) async {
    try {
      isLoading.value = true;
      queryProductos.value = await service.searchProducts(productName, page);
    } catch (e) {
      // HANDLE ERRORS
    } finally {
      isLoading.value = false;
    }
  }
}
