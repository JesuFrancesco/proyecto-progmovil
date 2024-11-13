import 'package:async/async.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/wishlist_controller.dart';
import 'package:jiron_anime/models/product.dart';
import 'package:jiron_anime/models/wishlist_item.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/shared/small_circular_indicator.dart';
import 'package:jiron_anime/utils/extensions.dart';

final _wishlistController = Get.put(WishlistController());

class WishlistButton extends StatelessWidget {
  final AsyncMemoizer wishlistMemoizer;
  final Product producto;

  const WishlistButton(
      {super.key, required this.producto, required this.wishlistMemoizer});

  bool get estaEnLaWishlist => _wishlistController.wishlist.value.wishlistItems!
      .map((e) => e.productId)
      .contains(producto.id);

  @override
  Widget build(BuildContext context) {
    final wishlistLoading = false.obs;

    Future<void> obtenerWishlist() async =>
        await wishlistMemoizer.runOnce(() async {
          await _wishlistController.obtenerMiWishlist();
        });

    Future<void> handleAgregarAWishlist(Product producto) async {
      wishlistLoading.value = true;

      await _wishlistController.agregarItemAWishlist(producto.id!);

      try {
        _wishlistController.wishlist.value.wishlistItems!
            .add(WishlistItem(productId: producto.id!));
      } catch (e) {
        //
      }

      wishlistLoading.value = false;
    }

    Future<void> handleQuitarDeWishlist(Product producto) async {
      wishlistLoading.value = true;
      await _wishlistController.removerItemDeWishlist(producto.id!);

      try {
        _wishlistController.wishlist.value.wishlistItems!
            .removeWhere((element) => element.productId == producto.id);
      } catch (e) {
        //
      }

      wishlistLoading.value = false;
    }

    GestureDetector getAddToWishlistButton() {
      if (!AuthService.isLoggedIn) {
        return GestureDetector(
          onTap: () => handleAgregarAWishlist(producto),
          child: Row(children: [
            const Icon(Icons.favorite_border_outlined),
            15.ph,
            const Text("Añadir a lista de deseados")
          ]),
        );
      }

      return GestureDetector(
        onTap: estaEnLaWishlist
            ? () => handleQuitarDeWishlist(producto)
            : () => handleAgregarAWishlist(producto),
        child: Row(children: [
          estaEnLaWishlist
              ? const Icon(Icons.favorite)
              : const Icon(Icons.favorite_border_outlined),
          15.ph,
          estaEnLaWishlist
              ? const Text("Quitar de lista de deseados")
              : const Text("Añadir a lista de deseados")
        ]),
      );
    }

    return Obx(() {
      if (wishlistLoading.value) {
        return const SmallCircularIndicator();
      } else {
        return FutureBuilder(
          future: AuthService.isLoggedIn ? obtenerWishlist() : null,
          builder: (ctx, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const SmallCircularIndicator();
            } else {
              return getAddToWishlistButton();
            }
          },
        );
      }
    });
  }
}
