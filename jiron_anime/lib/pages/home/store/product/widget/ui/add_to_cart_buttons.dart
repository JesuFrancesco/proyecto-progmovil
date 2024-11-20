import 'package:async/async.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/shopping_cart_controller.dart';
import 'package:jiron_anime/models/cart_item.dart';
import 'package:jiron_anime/models/product.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/shared/small_circular_indicator.dart';
import 'package:jiron_anime/theme/colors.dart';

final _shoppingCartController = Get.put(ShoppingCartController());

class AddToCartWidget extends StatelessWidget {
  final AsyncMemoizer cartMemoizer;
  final Product producto;
  const AddToCartWidget(
      {super.key, required this.producto, required this.cartMemoizer});

  bool get estaEnElCarrito => _shoppingCartController.carrito.value.cartItems!
      .map((e) => e.productId)
      .contains(producto.id);

  @override
  Widget build(BuildContext context) {
    final addCartLoading = false.obs;
    final numeroItems = 1.obs;

    void increaseCount() =>
        numeroItems.value += numeroItems.value < producto.stock! ? 1 : 0;

    void decreaseCount() => numeroItems.value -= numeroItems.value > 1 ? 1 : 0;

    Future<void> obtenerCarrito() async => await cartMemoizer.runOnce(() async {
          await _shoppingCartController.obtenerMiCarrito();
        });

    Future<void> handleAgregarAlCarrito() async {
      try {
        addCartLoading.value = true;

        if (producto.id != null) {
          await _shoppingCartController.agregarProductoAlCarrito(
              producto.id!, numeroItems.value);

          _shoppingCartController.carrito.value.cartItems!.add(CartItem(
              product: producto,
              productId: producto.id,
              amount: numeroItems.value,
              addedAt: DateTime.now()));

          Get.toNamed("/cart");
        } else {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text("Error: El producto no tiene ID")),
          );
        }
      } catch (e) {
        ScaffoldMessenger.of(context.mounted ? context : context).showSnackBar(
          SnackBar(content: Text("Algo salió mal. $e")),
        );
      } finally {
        addCartLoading.value = false;
      }
    }

    Widget getAddToCartButton() {
      if (!AuthService.isLoggedIn) {
        return ElevatedButton(
          onPressed: () => handleAgregarAlCarrito(),
          style: ElevatedButton.styleFrom(
            backgroundColor: AppColors.primaryColor,
            foregroundColor: Colors.white,
          ),
          child: const Text(
            "Agregar\nal carrito",
            style: TextStyle(fontWeight: FontWeight.bold),
            textAlign: TextAlign.center,
          ),
        );
      }

      if (producto.market!.profile!.client!.id == AuthService.getClientId()) {
        return ElevatedButton(
          onPressed: () => Get.toNamed("/my-markets"),
          style: ElevatedButton.styleFrom(
            backgroundColor: AppColors.primaryColor,
            foregroundColor: Colors.white,
          ),
          child: const Text(
            "Ver en mi tienda",
            style: TextStyle(fontWeight: FontWeight.bold),
            textAlign: TextAlign.center,
          ),
        );
      }

      return estaEnElCarrito
          ? ElevatedButton(
              onPressed: () => Get.toNamed("/cart"),
              child: const Text("Ver en el carrito"))
          : ElevatedButton(
              onPressed: () => handleAgregarAlCarrito(),
              style: ElevatedButton.styleFrom(
                backgroundColor: AppColors.primaryColor,
                foregroundColor: Colors.white,
              ),
              child: const Text(
                "Agregar\nal carrito",
                style: TextStyle(fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
            );
    }

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Obx(() {
          if (addCartLoading.value) {
            return const SmallCircularIndicator();
          } else {
            return FutureBuilder(
              future: AuthService.isLoggedIn ? obtenerCarrito() : null,
              builder: (ctx, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return const SmallCircularIndicator();
                } else {
                  return getAddToCartButton();
                }
              },
            );
          }
        }),
        IconButton(
          icon: const Icon(Icons.remove),
          onPressed: decreaseCount,
        ),
        Obx(() => Text('$numeroItems', style: const TextStyle(fontSize: 20))),
        IconButton(
          icon: const Icon(Icons.add),
          onPressed: increaseCount,
        ),
      ],
    );
  }
}
