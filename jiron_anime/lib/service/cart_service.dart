import 'dart:convert';
import 'package:get/get.dart';
import 'package:http_status/http_status.dart';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/shared/dialogs.dart';
import 'package:jiron_anime/utils/query_string.dart';
import 'package:jiron_anime/utils/supabase_utils.dart';
import 'package:jiron_anime/models/models_library.dart';

import 'package:http/http.dart' as http;

class CartService {
  Future<ShoppingCart> fetchCartWithProducts() async {
    final queryParams = {
      "where[clientId]": getClientId(),
      "include[cartItems][include][product][include][productAttachments]": true
    };

    final response = await http.get(
        Uri.parse(
            "${Config.serverURL}/shoppingcart/unique?${parseToQueryParams(queryParams)}"),
        headers: {...getSupabaseAuthHeaders()});

    final dynamic data = jsonDecode(response.body);

    return ShoppingCart.fromJson(data);
  }

  Future<void> addProductToCart(int amount, int productId) async {
    final res = await http.post(Uri.parse("${Config.serverURL}/cartitem"),
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

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salió mal.\n${res.body}"));
    }
  }

  Future<void> deleteProductFromCart(int productId) async {
    final res = await http.delete(Uri.parse("${Config.serverURL}/cartitem"),
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

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salió mal\n${res.body}"));
      throw Error();
    }
  }

  Future<void> emptyShoppingCart() async {
    final res = await http.delete(
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

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salió mal\n${res.body}"));
    }
  }
}
