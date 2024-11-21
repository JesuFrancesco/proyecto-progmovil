import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/tags_service.dart';

class TagController extends GetxController {
  TagService service = TagService();

  final isLoading = false.obs;
  final tags = <Tag>[].obs;
  final currentProductTags = <ProductTag>[].obs;

  Future<void> obtenerTags() async {
    tags.value = await service.fetchAll();
  }

  Future<void> obtenerTagsDeProducto(int productId) async {
    currentProductTags.value = await service.fetchFromProduct(productId);
  }
}
