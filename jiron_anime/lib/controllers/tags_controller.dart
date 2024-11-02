import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/static_tags_service.dart';

class TagController extends GetxController {
  TagService service = TagService();
  final tags = <Tag>[].obs;

  Future<void> obtenerTags() async {
    tags.value = await service.fetchAll();
  }
}
