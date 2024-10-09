import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'payment_controller.dart';

PaymentController control = Get.put(PaymentController());

class PaymentPage extends StatefulWidget {
  const PaymentPage({super.key});

  @override
  State<PaymentPage> createState() => _PaymentPageState();
}

class _PaymentPageState extends State<PaymentPage> {
  Widget _buildBody(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Image.network(
                  'https://images3.memedroid.com/images/UPLOADED528/663e2f9ea3686.jpeg',
                  width: 120,
                  height: 180,
                ),
                const SizedBox(width: 10),
                const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Titulo del articulo',
                      style:
                          TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                    ),
                    Text('Tomo: 1 - Cantidad: 1'),
                  ],
                )
              ],
            ),
            const SizedBox(height: 20),
            const Divider(),
            const Text(
              'ENVÍO',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
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
            const Text(
              'Total: S/. 41.00',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 20),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () {
                  // Acción para realizar el pedido
                },
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

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        resizeToAvoidBottomInset: false,
        appBar: null,
        body: _buildBody(context),
      ),
    );
  }
}
