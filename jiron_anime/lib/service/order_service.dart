import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/middleware/supabase_layer.dart';
import 'package:jiron_anime/models/order.dart';
import 'package:jiron_anime/models/order_item.dart';

class OrderService {
  Future<List<Order>> fetchAll() async {
    List<Order> ordenes = [];
    final response = await http.get(Uri.parse(
        "${Config.serverURL}/order?where[clientId]=${getClientId()}"));

    if (response.statusCode != 200) {
      throw Error();
    }

    final List<dynamic> data = jsonDecode(response.body);
    ordenes =
        data.map((map) => Order.fromJson(map as Map<String, dynamic>)).toList();

    return ordenes;
  }

  Future<Order> procesarOrdenDeCompra(List<OrderItem> items) async {
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
          "include": {"orderItems": true}
        }),
        headers: {
          "Content-Type": "application/json",
          ...getSupabaseAuthHeaders(),
        });

    print("response.body 1");
    print(response.body);

    final dynamic data = jsonDecode(response.body);

    return Order.fromJson(data);
  }
}
