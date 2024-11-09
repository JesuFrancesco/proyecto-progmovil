import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/product_service.dart';

class ProductoController extends GetxController {
  ProductoService service = ProductoService();
  final productos = <Product>[].obs;
  final queryProductos = <Product>[].obs;

  Future<void> obtenerProductos() async {
    productos.value = await service.fetchAll();
  }

  Future<void> obtenerProductosRecientes(int page) async {
    productos.value = await service.fetchRecent(page);
  }

  Future<void> obtenerProductosPorGenero(List<Tag> tags, int page) async {
    productos.value = await service.fetchProductsByGenre(tags, page);
  }

  Future<void> obtenerProductosPorQuery(String productName, int page) async {
    queryProductos.value = await service.searchProducts(productName, page);
  }
}
