import 'package:jiron_anime/controllers/SHOPPING_CART_CONTROLLER.dart';



class ShoppingCartService {
  final ShoppingCartController _shoppingCartController = ShoppingCartController();

  Future<void> addProductToCart(int cartId, int productId, int amount) async {
    await _shoppingCartController.addProductToCart(cartId, productId, amount);
  }

  // Puedes agregar otros métodos para obtener y eliminar productos.
}
