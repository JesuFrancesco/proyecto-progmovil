import 'package:jiron_anime/controllers/shopping_cart_controller.dart';

class ShoppingCartService {
  final ShoppingCartController _shoppingCartController =
      ShoppingCartController();

  Future<void> addProductToCart(int cartId, int productId, int amount) async {
    await _shoppingCartController.addProductToCart(cartId, productId, amount);
  }
}
