// wishlist_page.dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'wishlist_controller.dart';
import 'wishlist_item.dart';

class WishlistPage extends StatelessWidget {
  const WishlistPage({super.key});

  @override
  Widget build(BuildContext context) {
    // Instanciar el controlador
    final WishlistController controller = Get.put(WishlistController());

    return Scaffold(
      body: Obx(() {
        // Usar Obx para escuchar cambios en wishlistItems
        final wishlistItems = controller.wishlistItems;

        return CustomPadding(
          py: 2,
          child: Column(
            children: [
              kToolbarHeight.pv,
              const CustomAppbar(title: "Lista de deseados"),
              Expanded(
                child: ListView.builder(
                  itemCount: wishlistItems.length,
                  itemBuilder: (context, index) {
                    final item = wishlistItems[index];
                    return WishlistItemWidget(
                      product: item,
                      onRemove: () {
                        controller.removeFromWishlist(item.id);
                      },
                    );
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Text(
                  'Articulos en lista: ${controller.totalProducts}',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: AppColors.textColor,
                  ),
                ),
              ),
            ],
          ),
        );
      }),
    );
  }
}
