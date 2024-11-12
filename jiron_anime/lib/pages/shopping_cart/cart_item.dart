import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/wishlist_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/shared/small_circular_indicator.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';

final _wishlistController = Get.put(WishlistController());

class CartItemWidget extends StatelessWidget {
  final CartItem item;
  final VoidCallback onRemove;

  const CartItemWidget({
    super.key,
    required this.item,
    required this.onRemove,
  });

  bool get estaEnElCarrito => _wishlistController.wishlist.value.wishlistItems!
      .map((e) => e.productId)
      .contains(item.productId);

  @override
  Widget build(BuildContext context) {
    final wishlistLoading = false.obs;

    Future<void> guardarItemEnWishlist() async {
      wishlistLoading.value = true;
      await _wishlistController.agregarItemAWishlist(item.productId!);

      _wishlistController.wishlist.value.wishlistItems!
          .add(WishlistItem(productId: item.productId!));

      wishlistLoading.value = false;
    }

    Future<void> quitarItemDeWishlist() async {
      wishlistLoading.value = true;
      await _wishlistController.removerItemDeWishlist(item.productId!);

      _wishlistController.wishlist.value.wishlistItems!
          .removeWhere((element) => element.productId == item.productId);

      wishlistLoading.value = false;
    }

    return Container(
      margin: const EdgeInsets.symmetric(vertical: 4.0),
      decoration: BoxDecoration(
        color: Colors.transparent,
        borderRadius: BorderRadius.circular(15.0),
        border: Border.all(color: Colors.transparent, width: 2),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Row(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(8.0),
              child: Image.network(
                item.product!.productAttachments!.first.imageUrl!,
                width: 80,
                height: 120,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(width: 16.0),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    item.product!.name!,
                    style: const TextStyle(
                      fontSize: 18.0,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 8.0),
                  Text(
                    '${item.product!.formato} - Cantidad: ${item.amount}',
                    style: const TextStyle(
                      fontSize: 16.0,
                    ),
                  ),
                  const SizedBox(height: 8.0),
                  Row(
                    children: [
                      SizedBox(
                        width: 80,
                        height: 30,
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                              vertical: 4.0, horizontal: 8.0),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                          alignment: Alignment.center,
                          child: Text(
                            'S/. ${item.product!.price!}',
                            style: const TextStyle(
                              fontSize: 14.0,
                              fontWeight: FontWeight.bold,
                            ),
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                      8.ph,
                      Obx(() {
                        if (wishlistLoading.value) {
                          return const SmallCircularIndicator();
                        } else {
                          return FutureBuilder(
                            future: _wishlistController.obtenerMiWishlist(),
                            builder: (ctx, snapshot) {
                              if (snapshot.connectionState ==
                                  ConnectionState.waiting) {
                                return const SmallCircularIndicator();
                              } else {
                                return SizedBox(
                                  width: 90,
                                  height: 30,
                                  child: TextButton.icon(
                                    onPressed: estaEnElCarrito
                                        ? quitarItemDeWishlist
                                        : guardarItemEnWishlist,
                                    icon: Icon(
                                      estaEnElCarrito
                                          ? Icons.favorite
                                          : Icons.favorite_border_outlined,
                                      color: Colors.white,
                                      size: 16.0,
                                    ),
                                    label: Text(
                                      estaEnElCarrito ? 'Quitar' : 'Guardar',
                                      style: const TextStyle(
                                        fontSize: 14.0,
                                        color: Colors.white,
                                      ),
                                    ),
                                    style: TextButton.styleFrom(
                                      padding: EdgeInsets.zero,
                                      backgroundColor: AppColors.primaryColor,
                                      shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(8.0),
                                      ),
                                    ),
                                  ),
                                );
                              }
                            },
                          );
                        }
                      }),
                      const Spacer(),
                      PopupMenuButton(
                        icon: const Icon(Icons.more_vert),
                        itemBuilder: (BuildContext context) => [
                          const PopupMenuItem(
                            value: 'delete',
                            child: Row(
                              children: [
                                Icon(Icons.delete, color: Colors.red),
                                SizedBox(width: 8),
                                Text('Eliminar'),
                              ],
                            ),
                          ),
                        ],
                        onSelected: (value) {
                          if (value == 'delete') {
                            onRemove(); // Llama a la función para eliminar el artículo
                          }
                        },
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
