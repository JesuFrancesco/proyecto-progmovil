import 'dart:convert';
import 'package:get/get.dart';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/models/wishlist.dart';
import 'package:http/http.dart' as http;
import 'package:http_status/http_status.dart';
import 'package:jiron_anime/shared/error_dialog.dart';
import 'package:jiron_anime/utils/query_string.dart';
import 'package:jiron_anime/utils/supabase_utils.dart';

class WishlistService {
  Future<Wishlist> fetchMyWishlist() async {
    final queryParams = {
      "where[id]": getWishlistId(),
      "include[wishlistItems][include][product][include][productAttachments]":
          true,
    };

    final res = await http.get(Uri.parse(
        "${Config.serverURL}/wishlist/unique?${parseToQueryParams(queryParams)}"));

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salio mal.\n${res.body}"));
    }

    final dynamic data = jsonDecode(res.body);

    print(data.toString());

    return Wishlist.fromJson(data);
  }

  Future<Wishlist?> agregarItemAWishlist(int productId) async {
    final res = await http.post(Uri.parse("${Config.serverURL}/wishlistitem"),
        body: json.encode({
          "data": {
            "wishlistId": getWishlistId(),
            "productId": productId,
          }
        }),
        headers: {
          "Content-Type": "application/json",
          ...getSupabaseAuthHeaders()
        });

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salio mal.\n${res.body}"));
      return null;
    }

    final dynamic data = jsonDecode(res.body);

    Get.dialog(ErrorDialog(message: "TODO SALIO BIEN\n${data.toString()}"));
    return Wishlist.fromJson(data);
  }

  Future<Wishlist> removeItemFromWishlist(int productId) async {
    final res = await http.delete(Uri.parse("${Config.serverURL}/wishlistitem"),
        body: json.encode({
          "where": {
            "wishlistId_productId": {
              "productId": productId,
              "wishlistId": getWishlistId()
            }
          }
        }),
        headers: {
          "Content-Type": "application/json",
          ...getSupabaseAuthHeaders()
        });

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salio mal.\n${res.body}"));
    }

    final dynamic data = jsonDecode(res.body);

    return Wishlist.fromJson(data);
  }
}
