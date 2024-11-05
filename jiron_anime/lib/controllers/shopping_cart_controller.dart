import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/cart_service.dart';

class ShoppingCartController {
  final service = CartService();

  var carrito = ShoppingCart().obs;

  Future<void> obtenerCarrito() async {
    carrito.value = await service.obtenerCarritoConProductos();
  }

  Future<void> addProductToCart(int productId, int amount) async {
    await service.agregarProductoAlCarrito(amount, productId);
  }

  Future<void> deleteProductFromCart(int productId) async {
    await service.eliminarProductoDelCarrito(productId);
  }

  Future<void> emptyShoppingCart(int productId, int amount) async {
    await service.agregarProductoAlCarrito(amount, productId);
  }
}
