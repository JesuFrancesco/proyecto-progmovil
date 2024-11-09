import 'package:get/get.dart';
import 'package:jiron_anime/models/order.dart';
import 'package:jiron_anime/models/order_item.dart';
import 'package:jiron_anime/service/cart_service.dart';
import 'package:jiron_anime/service/order_service.dart';

class OrderController {
  final orderService = OrderService();
  final cartService = CartService();

  final ordenes = <Order>[].obs;

  Future<void> obtenerOrdenesDeCompra() async {
    ordenes.value = await orderService.fetchMyOrderHistory();
  }

  Future<void> procesarOrdenDeCompra(List<OrderItem> items) async {
    await orderService.processPurchaseOrder(items);
    await cartService.emptyShoppingCart();
  }
}
