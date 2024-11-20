import 'package:get/get.dart';
import 'package:jiron_anime/models/order.dart';
import 'package:jiron_anime/models/order_item.dart';
import 'package:jiron_anime/service/cart_service.dart';
import 'package:jiron_anime/service/order_service.dart';

class OrderController extends GetxController {
  final service = OrderService();
  final isLoading = false.obs;

  final cartService = CartService();

  final ordenes = <Order>[].obs;

  Future<void> obtenerOrdenesDeCompra() async {
    ordenes.value = await service.fetchMyOrderHistory();
  }

  Future<Order> procesarOrdenDeCompra(List<OrderItem> items) async {
    final orden = await service.processPurchaseOrder(items);

    return orden;
  }

  Future<Order> completarOrden(int ordenId) async {
    final orden = await service.completeOrder(ordenId);

    return orden;
  }
}
