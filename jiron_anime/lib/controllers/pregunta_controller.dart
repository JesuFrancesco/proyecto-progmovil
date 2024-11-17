import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/pregunta_service.dart';

class PreguntaController extends GetxController {
  final service = PreguntaService();

  final preguntas = <ProductQuestion>[].obs;

  Future<void> obtenerPreguntasDeProducto(int productId) async {
    preguntas.value = await service.fetchProductQuestions(productId);
  }

  Future<void> crearPreguntaDeProducto(ProductQuestion productoPregunta) async {
    await service.submitProductQuestion(productoPregunta);
    preguntas.add(productoPregunta);
  }
}
