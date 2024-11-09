import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/cart_service.dart';

class ShoppingCartController {
  final service = CartService();

  final carrito = ShoppingCart().obs;

  Future<void> obtenerCarrito() async {
    carrito.value = await service.fetchCartWithProducts();
  }

  Future<void> aniadirProductoAlCarrito(int productId, int amount) async {
    await service.addProductToCart(amount, productId);
  }

  Future<void> eliminarProductoDelCarrito(int productId) async {
    await service.deleteProductFromCart(productId);
  }

  Future<void> vaciarCarritoDeCompras() async {
    await service.emptyShoppingCart();
  }
}
