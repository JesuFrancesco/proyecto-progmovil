import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/service/cart_service.dart';

class ShoppingCartController extends GetxController {
  final service = CartService();

  final carrito = ShoppingCart().obs;

  Future<void> obtenerMiCarrito() async {
    carrito.value = await service.fetchCartWithProducts();
  }

  Future<void> agregarProductoAlCarrito(int productId, int amount) async {
    if (!AuthService.isLoggedIn) {
      // Get.toNamed("/sign-in");
      return;
    }
    await service.addProductToCart(amount, productId);
  }

  Future<void> eliminarProductoDelCarrito(int productId) async {
    if (!AuthService.isLoggedIn) {
      Get.toNamed("/sign-in");
      return;
    }
    await service.deleteProductFromCart(productId);
  }

  Future<void> vaciarCarritoDeCompras() async {
    if (!AuthService.isLoggedIn) {
      Get.toNamed("/sign-in");
      return;
    }
    await service.emptyShoppingCart();
  }
}
