import 'package:get/get.dart';
import 'package:jiron_anime/models/market.dart';
import 'package:jiron_anime/service/market_service.dart';

class MarketController extends GetxController {
  final MarketService marketService = MarketService();
  final RxList<Market> markets = <Market>[].obs; // Lista reactiva para manejar los mercados

  // Método para obtener los mercados asociados a un profileId específico
  Future<void> obtenerMercados() async {
    try {
      // Llamada al servicio para obtener los mercados con un profileId fijo
      final List<Market> fetchedMarkets = await marketService.fetchMyMarkets();

      if (fetchedMarkets.isEmpty) {
        Get.snackbar(
          "Sin mercados",
          "No se encontraron mercados asociados al usuario.",
          snackPosition: SnackPosition.BOTTOM,
          duration: Duration(seconds: 3),
        );
      } else {
        // Asignamos los mercados a la lista reactiva
        markets.assignAll(fetchedMarkets);
      }
    } catch (e) {
      // Manejo de errores si la llamada al servicio falla
      Get.snackbar(
        "Error",
        "No se pudieron cargar los mercados: $e",
        snackPosition: SnackPosition.BOTTOM,
        duration: Duration(seconds: 10),
      );
    }
  }

  @override
  void onInit() {
    super.onInit();
    obtenerMercados(); // Llamamos al método al inicializar el controlador
  }
}
