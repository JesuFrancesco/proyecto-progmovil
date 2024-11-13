import 'package:get/get.dart';
import 'package:jiron_anime/models/order.dart';
import 'package:jiron_anime/models/order_item.dart';
// import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/service/cart_service.dart';
import 'package:jiron_anime/service/order_service.dart';

class OrderController extends GetxController {
  final service = OrderService();

  final cartService = CartService();

  final ordenes = <Order>[].obs;

  Future<void> obtenerOrdenesDeCompra() async {
    // if (!AuthService.isLoggedIn) {
    //   Get.toNamed("/sign-in");
    //   return;
    // }
    ordenes.value = await service.fetchMyOrderHistory();
  }

  Future<Order> procesarOrdenDeCompra(List<OrderItem> items) async {
    // if (!AuthService.isLoggedIn) {
    //   Get.toNamed("/sign-in");
    //   return;
    // }
    final orden = await service.processPurchaseOrder(items);
    // await cartService.emptyShoppingCart();

    return orden;
  }
}
