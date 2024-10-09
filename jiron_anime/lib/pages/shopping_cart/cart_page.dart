// shopping_cart_page.dart
import 'package:flutter/material.dart';
import 'product.dart'; // Modelo del producto
import 'cart_item.dart'; // Widget para el ítem del carrito

class ShoppingCartPage extends StatelessWidget {
  const ShoppingCartPage({super.key});

  @override
  Widget build(BuildContext context) {
    // Ejemplo de productos en el carrito
    final List<Product> cartItems = [
      Product(
        name: "Sousou no Frieren",
        price: 41.00,
        quantity: 2,
        imageUrl: "https://ramenparados.com/wp-content/uploads/2023/12/frieren-12-jp.jpg",
      ),
      Product(
        name: "Kaguya-sama: Love Is War",
        price: 35.00,
        quantity: 1,
        imageUrl: "https://static.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/c/cc/Volumen1.png/revision/latest?cb=20230625165459&path-prefix=es",
      ),
      Product(
        name: "Kaguya-sama: Love Is War",
        price: 35.00,
        quantity: 1,
        imageUrl: "https://static.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/c/cc/Volumen1.png/revision/latest?cb=20230625165459&path-prefix=es",
      ),
    ];

    // Calcular la cantidad total de productos
    int totalProducts = cartItems.fold(0, (sum, item) => sum + item.quantity);

    // Calcular el total del carrito
    double totalAmount = cartItems.fold(0, (sum, item) => sum + (item.price * item.quantity));

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'CARRITO',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            color: Colors.black,
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
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFFFDE7E0), Color(0xFFFEF3F0)],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          children: [
            Expanded(
              child: ListView.builder(
                itemCount: cartItems.length,
                itemBuilder: (context, index) {
                  final item = cartItems[index];
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
              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    'Artículos: $totalProducts',
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
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
                          color: Colors.black,
                        ),
                      ),
                      Text(
                        'S/. ${totalAmount.toStringAsFixed(2)}',
                        style: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
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
                  _processPayment(context, totalAmount);
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.black,
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
                    color: Colors.white,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _processPayment(BuildContext context, double totalAmount) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Procesando pago'),
          content: Text('El monto total es S/. ${totalAmount.toStringAsFixed(2)}'),
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
