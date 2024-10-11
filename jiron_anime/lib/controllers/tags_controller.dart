import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/static_tags_service.dart';

class TagController extends GetxController {
  StaticTagsService service = StaticTagsService();
  final notificaciones = <Tag>[].obs;

  Future<void> obtenerTags() async {
    notificaciones.value = await service.fetchAll();
  }
}
