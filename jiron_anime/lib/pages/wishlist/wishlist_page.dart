import 'package:flutter/material.dart';
import 'package:jiron_anime/controllers/wishlist_controller.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'wishlist_item.dart';

class WishlistPage extends StatelessWidget {
  const WishlistPage({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = WishlistController();

    return Scaffold(
      body: CustomLayout(
        child: CustomScrollView(
          slivers: [
            SliverFillRemaining(
              hasScrollBody: false,
              child: Column(
                children: [
                  const CustomAppbar(title: "Lista de deseados"),
                  FutureBuilder(
                      future: controller.obtenerMiWishlist(),
                      builder: (context, snapshot) {
                        if (snapshot.connectionState ==
                            ConnectionState.waiting) {
                          return const Expanded(
                            child: Center(child: CircularProgressIndicator()),
                          );
                        } else if (snapshot.hasError) {
                          return Center(
                              child: Text(
                            'Algo salió mal: ${snapshot.error}',
                            style: Theme.of(context).textTheme.titleMedium,
                          ));
                        } else {
                          final wishlistItems =
                              controller.wishlist.value.wishlistItems!;

                          if (wishlistItems.isEmpty) {
                            return Expanded(
                                child: Center(
                                    child: Text(
                              "No tienes items en tu lista de deseados",
                              style: Theme.of(context).textTheme.titleMedium,
                            )));
                          }

                          return Column(
                            children: [
                              ...wishlistItems.map((wshItem) =>
                                  WishlistItemWidget(
                                      product: wshItem.product!,
                                      onRemove: () =>
                                          controller.removerItemDeWishlist(
                                              wshItem.productId!))),
                              Padding(
                                padding: const EdgeInsets.all(16.0),
                                child: Text(
                                  'Articulos en lista: ${controller.wishlist.value.wishlistItems!.length}',
                                  style: const TextStyle(
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ],
                          );
                        }
                      }),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
