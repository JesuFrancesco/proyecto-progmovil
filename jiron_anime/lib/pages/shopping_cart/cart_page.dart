// shopping_cart_page.dart
import 'package:flutter/material.dart';
import 'package:jiron_anime/controllers/shopping_cart_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/payment/payment_page.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'cart_item.dart';

class ShoppingCartPage extends StatefulWidget {
  const ShoppingCartPage({super.key});

  @override
  State<ShoppingCartPage> createState() => _ShoppingCartPageState();
}

final ShoppingCartController shoppingCartController = ShoppingCartController();

class _ShoppingCartPageState extends State<ShoppingCartPage> {
  ShoppingCart? carrito;

  @override
  void initState() {
    super.initState();
    cargarCarrito();
  }

  Future<void> cargarCarrito() async {
    final ShoppingCart res = await shoppingCartController.obtenerCarrito(1);
    setState(() {
      carrito = res;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: carrito == null
          ? const Center(child: CircularProgressIndicator())
          : CustomLayout(
              child: Column(
                children: [
                  kToolbarHeight.pv,
                  const CustomAppbar(title: "Carrito de compras"),
                  Expanded(
                    child: ListView.builder(
                      itemCount: carrito!.cartItems!.length,
                      itemBuilder: (context, index) {
                        final item = carrito!.cartItems![index];
                        return CartItemWidget(
                          item: item,
                          onRemove: () {
                            setState(() {
                              shoppingCartController.deleteProductFromCart(
                                  1, item.productId!);
                              carrito!.cartItems!.removeAt(index);
                            });
                          },
                        );
                      },
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 16.0, vertical: 8.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Text(
                          'Artículos: ${carrito!.cartItems!.length}',
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
                              'S/. ${carrito!.cartItems!.fold(0, (sum, cartItem) => sum + (cartItem.product!.price! * cartItem.amount!).toInt())}',
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
                        _processPayment(context, carrito!);
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
                            color: Colors.white),
                      ),
                    ),
                  ),
                ],
              ),
            ),
    );
  }

  void _processPayment(BuildContext context, ShoppingCart carrito) {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute<void>(
        builder: (BuildContext context) => PaymentPage(
          carrito: carrito,
        ),
      ),
    );
  }
}
