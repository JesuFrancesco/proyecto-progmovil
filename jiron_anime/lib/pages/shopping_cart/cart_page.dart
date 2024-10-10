// shopping_cart_page.dart
import 'package:flutter/material.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'cart_item.dart'; // Widget para el ítem del carrito

class ShoppingCartPage extends StatelessWidget {
  const ShoppingCartPage({super.key});

  @override
  Widget build(BuildContext context) {
    // Ejemplo de productos en el carrito
    final Order orden = Order(orderItems: [
      OrderItem(
        amount: 2,
        product: Product(
            name: "Sousou no Frieren",
            formato: "Tomo 1",
            price: 41.00,
            productAttachments: [
              ProductAttachment(
                  imageUrl:
                      "https://ramenparados.com/wp-content/uploads/2023/12/frieren-12-jp.jpg")
            ]),
      ),
      OrderItem(
        amount: 1,
        product: Product(
            name: "Kaguya-sama: Love Is War",
            formato: "Tomo 1",
            price: 35.00,
            productAttachments: [
              ProductAttachment(
                  imageUrl:
                      "https://static.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/c/cc/Volumen1.png/revision/latest?cb=20230625165459&path-prefix=es")
            ]),
      ),
      OrderItem(
        amount: 1,
        product: Product(
            name: "Kaguya-sama: Love Is War 2",
            price: 35.00,
            formato: "Tomo 2",
            productAttachments: [
              ProductAttachment(
                  imageUrl:
                      "https://images.cdn2.buscalibre.com/fit-in/360x360/8a/33/8a337bc697ac34f48372e7c30f492d0b.jpg"),
            ]),
      )
    ]);

    int totalProducts = orden.orderItems!.length;

    orden.totalPrice = orden.orderItems!.fold(
        0,
        (sum, orderItem) =>
            sum! + (orderItem.product!.price! * orderItem.amount!).toInt());

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'CARRITO',
          style: TextStyle(
            fontWeight: FontWeight.bold,
          ),
        ),
        centerTitle: true,
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.pushNamed(context, '/home');
          },
        ),
      ),
      extendBodyBehindAppBar: true,
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: orden.orderItems!.length,
              itemBuilder: (context, index) {
                final item = orden.orderItems![index];
                return CartItemWidget(
                  item: item,
                  onRemove: () {
                    // Lógica para eliminar el ítem del carrito (si lo necesitas)
                  },
                );
              },
            ),
          ),
          Padding(
            padding:
                const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  'Artículos: $totalProducts',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text(
                      'Total [Impuestos Incl.]: ',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      'S/. ${orden.totalPrice}',
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: ElevatedButton(
              onPressed: () {
                _processPayment(context, orden.totalPrice!.toDouble());
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: AppColors.primaryColor,
                minimumSize: const Size(double.infinity, 50),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30.0),
                ),
              ),
              child: const Text(
                'PAGAR',
                style: TextStyle(
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                    color: AppColors.backgroundColor),
              ),
            ),
          ),
        ],
      ),
    );
  }

  void _processPayment(BuildContext context, double totalAmount) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Procesando pago'),
          content:
              Text('El monto total es S/. ${totalAmount.toStringAsFixed(2)}'),
          actions: <Widget>[
            TextButton(
              child: const Text('Aceptar'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }
}
