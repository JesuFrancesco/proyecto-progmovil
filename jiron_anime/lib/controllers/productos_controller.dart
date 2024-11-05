import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/product_service.dart';

class ProductoController extends GetxController {
  StaticProductoService service = StaticProductoService();
  final productos = <Product>[].obs;
  final filteredProductos = <Product>[].obs;

  get filteredMangas => null;

  Future<void> obtenerProductos() async {
    productos.value = await service.fetchAll();
  }

  Future<void> buscarProductos(String productName, int page) async {
    filteredProductos.value = await service.searchProducts(productName, page);
  }

  void filterMangas(String category) {}
}
