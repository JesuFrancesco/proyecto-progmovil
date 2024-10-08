import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/manga_service.dart';

class MangaController extends GetxController {
  StaticMangaService service = StaticMangaService();
  final mangas = <Product>[].obs;

  void obtenerMangas() async {
    mangas.value = await service.fetchAll();
    print(mangas);
  }
}

