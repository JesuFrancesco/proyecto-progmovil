import 'dart:convert';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/middleware/supabase_layer.dart';
import 'package:jiron_anime/models/models_library.dart';

import 'package:http/http.dart' as http;

class CartService {
  Future<ShoppingCart> obtenerCarritoConProductos() async {
    ShoppingCart carrito;
    final response = await http.get(
        Uri.parse(
            "${Config.serverURL}/shoppingcart/unique?where[clientId]=${getClientId()}&include[cartItems][include][product][include][productAttachments]"),
        headers: getSupabaseAuthHeaders());

    final dynamic data = jsonDecode(response.body);
    carrito = ShoppingCart.fromJson(data);

    return carrito;
  }

  Future<void> agregarProductoAlCarrito(int amount, int productId) async {
    final response = await http.post(Uri.parse("${Config.serverURL}/cartitem"),
        body: json.encode({
          "data": {
            "cartId": getShoppingCartId(),
            "amount": amount,
            "productId": productId
          }
        }),
        headers: {
          "Content-Type": "application/json",
          ...getSupabaseAuthHeaders()
        });

    if (response.statusCode != 201) {
      throw Error();
    }
  }

  Future<void> eliminarProductoDelCarrito(int productId) async {
    final response = await http.delete(
        Uri.parse("${Config.serverURL}/cartitem"),
        body: json.encode({
          "where": {
            "cartId_productId": {
              "cartId": getShoppingCartId(),
              "productId": productId
            }
          }
        }),
        headers: {
          "Content-Type": "application/json",
          ...getSupabaseAuthHeaders()
        });

    if (response.statusCode != 200 && response.statusCode != 202) {
      throw Error();
    }
  }

  Future<void> emptyShoppingCart() async {
    final response = await http.delete(
        Uri.parse("${Config.serverURL}/cartitem/many"),
        body: json.encode({
          "where": {
            "cartId": getShoppingCartId(),
          }
        }),
        headers: {
          "Content-Type": "application/json",
          ...getSupabaseAuthHeaders()
        });
    ;
    print("response.body 2");
    print(response.body);
  }
}
