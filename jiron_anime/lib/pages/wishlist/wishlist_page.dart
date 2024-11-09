import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/wishlist_controller.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'wishlist_item.dart';

class WishlistPage extends StatelessWidget {
  const WishlistPage({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = WishlistController();

    return CustomLayout(
      child: Scaffold(
        body: FutureBuilder(
            future: controller.obtenerMiWishlist(),
            builder: (context, snapshot) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return const CircularProgressIndicator();
              } else if (snapshot.hasError) {
                return Center(child: Text('Error: ${snapshot.error}'));
              } else {
                final wishlistItems = controller.wishlist.value.wishlistItems!;
                return Obx(() {
                  return CustomLayout(
                    pt: 2,
                    child: Column(
                      children: [
                        const CustomAppbar(title: "Lista de deseados"),
                        Expanded(
                          child: ListView.builder(
                            itemCount: wishlistItems.length,
                            itemBuilder: (context, index) {
                              final item = wishlistItems[index];
                              return WishlistItemWidget(
                                product: item.product!,
                                onRemove: () {
                                  // TODO: handle remove item
                                  controller
                                      .removerItemDeWishlist(item.productId!);
                                  // controller.productos.removeAt(index);
                                },
                              );
                            },
                          ),
                        ),
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
                    ),
                  );
                });
              }
            }),
      ),
    );
  }
}
