import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/static_manga_service.dart';

class ProductoController extends GetxController {
  StaticProductoService service = StaticProductoService();
  final productos = <Product>[].obs;

  void obtenerMangas() async {
    productos.value = await service.fetchAll();
  }
}
