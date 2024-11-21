import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/order_controller.dart';
import 'package:jiron_anime/controllers/shopping_cart_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/payment/widget/product_resume.dart';
import 'package:jiron_anime/pages/payment_success/payment_success_page.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/shared/small_circular_indicator.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';
import 'package:latlong2/latlong.dart';

class PaymentPage extends StatefulWidget {
  const PaymentPage({super.key});

  @override
  State<PaymentPage> createState() => _PaymentPageState();
}

class _PaymentPageState extends State<PaymentPage> {
  final shoppingCartController = Get.put(ShoppingCartController());
  final orderController = Get.put(OrderController());
  final paymentLoading = false.obs;

  get cartItems => shoppingCartController.cartItems;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const CustomAppbar(title: "Pago"),
            Expanded(
              child: ListView.builder(
                itemCount: cartItems!.length,
                itemBuilder: (context, index) {
                  final item = cartItems![index];
                  return ProductResumeWidget(
                    item: item,
                    onRemove: () {},
                  );
                },
              ),
            ),
            const Divider(),
            const Text(
              'ENVÍO',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            8.pv,
            GestureDetector(
              onTap: () async {
                final date = await showDatePicker(
                  context: context,
                  initialDate: DateTime.now().add(const Duration(days: 3)),
                  firstDate: DateTime.now(),
                  lastDate: DateTime.now().add(const Duration(days: 30)),
                );
                if (date != null) {
                  Get.snackbar(
                    "Fecha seleccionada",
                    "Tu pedido llegará el ${date.day}/${date.month}/${date.year}",
                  );
                }
              },
              child: const Text(
                'Seleccionar fecha de entrega',
                style: TextStyle(color: Colors.blue),
              ),
            ),
            const Text('ENTREGA - GRATIS'),
            const Text('Ubicación:'),
            Container(
              height: 200,
              margin: const EdgeInsets.symmetric(vertical: 10),
              child: FlutterMap(
                options: const MapOptions(
                  initialCenter: LatLng(-12.094056, -76.964426),
                  initialZoom: 15.0,
                ),
                children: [
                  TileLayer(
                    urlTemplate:
                        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                    userAgentPackageName: 'com.example.jiron_anime',
                  ),
                  const MarkerLayer(
                    markers: [
                      Marker(
                        width: 50.0,
                        height: 50.0,
                        point: LatLng(-12.094056, -76.964426),
                        child: Icon(
                          Icons.location_pin,
                          color: Colors.red,
                          size: 30,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const Divider(),
            GestureDetector(
              onTap: () {
                Get.to(() => const MockPasarelaDePago());
              },
              child: const ListTile(
                title: Text('Pago'),
                subtitle: Text('Seleccionar un método de pago',
                    style: TextStyle(color: Colors.blue)),
              ),
            ),
            GestureDetector(
              onTap: () {
                Get.snackbar(
                    "WIP", "Esta funcionalidad aún está en desarrollo.");
              },
              child: const ListTile(
                title: Text('Tus datos'),
                subtitle: Text('Ingresa tus datos',
                    style: TextStyle(color: Colors.blue)),
              ),
            ),
            GestureDetector(
              onTap: () {
                Get.snackbar(
                    "WIP", "Esta funcionalidad aún está en desarrollo.");
              },
              child: const ListTile(
                title: Text('Código de descuento'),
                subtitle: Text('Elegir un descuento',
                    style: TextStyle(color: Colors.blue)),
              ),
            ),
            const Spacer(),
            const Divider(),
            Text(
              'Total: S/. ${cartItems!.fold(0, (sum, cartItem) => sum + (cartItem.product!.price! * cartItem.amount!).toInt())}',
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 20),
            Obx(
              () => paymentLoading.value
                  ? const SmallCircularIndicator()
                  : SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                        onPressed: handleRealizarPedidoOnClick,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.black,
                          padding: const EdgeInsets.symmetric(vertical: 15),
                        ),
                        child: const Text(
                          'REALIZAR PEDIDO',
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ),
            ),
            const SizedBox(height: 20),
            const Center(
              child: Text(
                'Al realizar un pedido, aceptas nuestros términos y condiciones.',
                style: TextStyle(fontSize: 12, color: Colors.grey),
                textAlign: TextAlign.center,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> handleRealizarPedidoOnClick() async {
    try {
      paymentLoading.value = true;
      final itemsCarrito = cartItems!;

      final itemsOrden = itemsCarrito.map((e) {
        return OrderItem(
          amount: e.amount,
          product: e.product,
          productId: e.productId,
        );
      }).toList();

      final order = await orderController.procesarOrdenDeCompra(itemsOrden);
      Get.offAll(() => PaymentSuccessPage(
            order: order,
          ));
    } catch (e) {
      // HANDLE ERRORS
    } finally {
      paymentLoading.value = false;
    }
  }
}

class MockPasarelaDePago extends StatelessWidget {
  const MockPasarelaDePago({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: CustomLayout(
        child: Column(
          children: [
            CustomAppbar(
              title: "Pasarela de pago",
              showAvatar: false,
            ),
            Center(
              child: Text(
                'Aquí iría la integración con una pasarela de pagos.',
                style: TextStyle(fontSize: 16),
                textAlign: TextAlign.center,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
