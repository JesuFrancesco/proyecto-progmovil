import 'package:get/get.dart';
import 'package:jiron_anime/models/order.dart';
import 'package:jiron_anime/models/order_item.dart';
import 'package:jiron_anime/service/cart_service.dart';
import 'package:jiron_anime/service/order_service.dart';

class OrderController {
  final orderService = OrderService();
  final cartService = CartService();

  var ordenes = <Order>[].obs;

  Future<void> fetchOrders() async {
    ordenes.value = await orderService.fetchAll();
  }

  Future<void> processOrder(List<OrderItem> items) async {
    await orderService.procesarOrdenDeCompra(items);
    await cartService.emptyShoppingCart();
  }
}
