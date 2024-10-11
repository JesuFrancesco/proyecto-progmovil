import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'wishlist_item.dart';

class WishlistPage extends StatelessWidget {
  const WishlistPage({super.key});

  @override
  Widget build(BuildContext context) {
    final ProductoController controller = Get.put(ProductoController());

    return Scaffold(
      body: Obx(() {
        final wishlistItems = controller.productos;

        return CustomLayout(
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
                        controller.productos.removeAt(index);
                      },
                    );
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Text(
                  'Articulos en lista: ${controller.productos.length}',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
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
