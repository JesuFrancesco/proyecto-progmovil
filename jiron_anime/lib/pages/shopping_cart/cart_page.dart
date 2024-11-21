// shopping_cart_page.dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/shopping_cart_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/payment/payment_page.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'cart_item.dart';

class ShoppingCartPage extends StatefulWidget {
  const ShoppingCartPage({super.key});

  @override
  State<ShoppingCartPage> createState() => _ShoppingCartPageState();
}

class _ShoppingCartPageState extends State<ShoppingCartPage> {
  final shoppingCartController = Get.put(ShoppingCartController());

  get carrito => shoppingCartController.carrito;

  get cartItems => shoppingCartController.cartItems;
  final isLoading = false.obs;

  @override
  void initState() {
    super.initState();
    cargarCarrito();
  }

  Future<void> cargarCarrito() async {
    try {
      isLoading.value = true;
      await shoppingCartController.obtenerMiCarrito();
    } catch (e) {
      // handler
    } finally {
      isLoading.value = false;
    }
  }

  Future<void> productoOnDelete(CartItem item) async {
    isLoading.value = true;

    await shoppingCartController.eliminarProductoDelCarrito(item.productId!);

    isLoading.value = false;

    await cargarCarrito();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: CustomScrollView(
          slivers: [
            SliverFillRemaining(
              hasScrollBody: false,
              child: Column(
                children: [
                  const CustomAppbar(title: "Carrito de compras"),
                  Obx(
                    () => isLoading.value
                        ? const Expanded(
                            child: Center(child: CircularProgressIndicator()))
                        : cartItems!.isEmpty
                            ? Expanded(
                                child: Center(
                                    child: Text("No tienes items en el carrito",
                                        textAlign: TextAlign.center,
                                        style: Theme.of(context)
                                            .textTheme
                                            .titleMedium)))
                            : Column(
                                children: [
                                  ...cartItems!.map((e) => CartItemWidget(
                                      item: e,
                                      onRemove: () => productoOnDelete(e))),
                                  Padding(
                                    padding: const EdgeInsets.symmetric(
                                        horizontal: 16.0, vertical: 8.0),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.stretch,
                                      children: [
                                        Text(
                                          'Artículos: ${cartItems!.length}',
                                          style: const TextStyle(
                                            fontSize: 18,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        const SizedBox(height: 8.0),
                                        Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceBetween,
                                          children: [
                                            const Text(
                                              'Total [Impuestos Incl.]: ',
                                              style: TextStyle(
                                                fontSize: 18,
                                                fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            Text(
                                              'S/. ${cartItems!.fold(0, (sum, cartItem) => sum + (cartItem.product!.price! * cartItem.amount!).toInt())}',
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
                                      onPressed: () =>
                                          procesarPago(context, carrito!),
                                      style: ElevatedButton.styleFrom(
                                        backgroundColor: AppColors.primaryColor,
                                        minimumSize:
                                            const Size(double.infinity, 50),
                                        shape: RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(30.0),
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
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  void procesarPago(BuildContext context, ShoppingCart carrito) {
    Get.to(() => const PaymentPage());
  }
}
