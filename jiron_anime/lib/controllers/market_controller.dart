import 'package:get/get.dart';
import 'package:jiron_anime/models/market.dart';
import 'package:jiron_anime/models/product.dart';
import 'package:jiron_anime/service/market_service.dart';

class MarketController extends GetxController {
  final MarketService marketService = MarketService();
  final RxList<Market> markets = <Market>[].obs;

  Future<void> crearNuevoMercado(Market mercado) async {
    try {
      await marketService.createNewMarket(mercado);
    } catch (e) {
      Get.snackbar(
        "Error",
        "No se pudo crear tu mercado: $e",
        snackPosition: SnackPosition.BOTTOM,
        duration: const Duration(seconds: 10),
      );
      throw Error();
    }
  }

  Future<void> agregarNuevoProducto(Product data, int marketId) async {
    try {
      await marketService.createNewProduct(data, marketId);
    } catch (e) {
      Get.snackbar(
        "Error",
        "No se pudo crear este producto: $e",
        snackPosition: SnackPosition.BOTTOM,
        duration: const Duration(seconds: 10),
      );
      throw Error();
    }
  }

  Future<void> obtenerMisMercados() async {
    try {
      final List<Market> fetchedMarkets = await marketService.fetchMyMarkets();

      if (fetchedMarkets.isEmpty) {
        Get.snackbar(
          "Sin mercados",
          "No se encontraron mercados asociados al usuario.",
          snackPosition: SnackPosition.BOTTOM,
          duration: const Duration(seconds: 3),
        );
      } else {
        markets.assignAll(fetchedMarkets);
      }
    } catch (e) {
      Get.snackbar(
        "Error",
        "No se pudieron cargar los mercados: $e",
        snackPosition: SnackPosition.BOTTOM,
        duration: const Duration(seconds: 10),
      );
    }
  }
}
