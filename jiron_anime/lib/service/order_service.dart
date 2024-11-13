import 'dart:convert';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:http_status/http_status.dart';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/shared/dialogs.dart';
import 'package:jiron_anime/utils/query_string.dart';
import 'package:jiron_anime/utils/supabase_utils.dart';
import 'package:jiron_anime/models/order.dart';
import 'package:jiron_anime/models/order_item.dart';

class OrderService {
  Future<List<Order>> fetchMyOrderHistory() async {
    List<Order> ordenes = [];
    final queryParams = {
      "where[clientId]": getClientId(),
      "include[orderItems][include][product][include][productAttachments]":
          true,
      "include[orderItems][include][product][include][market]": true,
      "include[client]": true
    };

    final res = await http.get(Uri.parse(
        "${Config.serverURL}/order?${parseToQueryParams(queryParams)}"));

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salió mal.\n${res.body}"));
    }

    final List<dynamic> data = jsonDecode(res.body);
    ordenes =
        data.map((map) => Order.fromJson(map as Map<String, dynamic>)).toList();

    return ordenes;
  }

  Future<Order> processPurchaseOrder(List<OrderItem> items) async {
    final response = await http.post(Uri.parse("${Config.serverURL}/order"),
        body: json.encode({
          "data": {
            "clientId": getClientId(),
            "orderItems": {
              "create": items
                  .map(
                    (e) => ({"productId": e.productId, "amount": e.amount}),
                  )
                  .toList()
            },
            "totalPrice": items.fold(
                0.0,
                (value, element) =>
                    value + element.amount! * element.product!.price!),
            "status": "Recepcionando compra...",
          },
          "include": {
            "orderItems": {
              "include": {"product": true}
            },
            "client": true
          }
        }),
        headers: {
          "Content-Type": "application/json",
          ...getSupabaseAuthHeaders(),
        });

    final dynamic data = jsonDecode(response.body);

    return Order.fromJson(data);
  }
}
