import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/order_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/payment/widget/product_resume.dart';
import 'package:jiron_anime/pages/payment_success/payment_success_page.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/utils/extensions.dart';

class PaymentPage extends StatefulWidget {
  final ShoppingCart carrito;
  const PaymentPage({super.key, required this.carrito});

  @override
  State<PaymentPage> createState() => _PaymentPageState();
}

class _PaymentPageState extends State<PaymentPage> {
  final orderController = OrderController();

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
                itemCount: widget.carrito.cartItems!.length,
                itemBuilder: (context, index) {
                  final item = widget.carrito.cartItems![index];
                  return ProductResumeWidget(
                    item: item,
                    onRemove: () {
                      // Lógica para eliminar el ítem del carrito (de ser necesario)
                    },
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
            const Text('Llega el jueves, 12 set.'),
            const Text('ENTREGA - GRATIS'),
            const Text('Jr. Monterico 492, LA MOLINA'),
            const SizedBox(height: 20),
            const Divider(),
            GestureDetector(
              onTap: () {
                // Acción para seleccionar el método de pago
              },
              child: const ListTile(
                title: Text('Pago'),
                subtitle: Text('Seleccionar un método de pago',
                    style: TextStyle(color: Colors.blue)),
              ),
            ),
            GestureDetector(
              onTap: () {
                // Acción para ingresar los datos
              },
              child: const ListTile(
                title: Text('Tus datos'),
                subtitle: Text('Ingresa tus datos',
                    style: TextStyle(color: Colors.blue)),
              ),
            ),
            GestureDetector(
              onTap: () {
                // Acción para elegir un código de descuento
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
              'Total: S/. ${widget.carrito.cartItems!.fold(0, (sum, cartItem) => sum + (cartItem.product!.price! * cartItem.amount!).toInt())}',
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 20),
            SizedBox(
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
    final itemsCarrito = widget.carrito.cartItems!;

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
  }
}
