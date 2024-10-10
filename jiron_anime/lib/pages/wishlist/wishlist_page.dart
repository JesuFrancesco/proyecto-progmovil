// wishlist_page.dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'wishlist_controller.dart';
import 'wishlist_item.dart';

class WishlistPage extends StatelessWidget {
  const WishlistPage({super.key});

  @override
  Widget build(BuildContext context) {
    // Instanciar el controlador
    final WishlistController controller = Get.put(WishlistController());

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'LISTA DE DESEADOS',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            color: Colors.black,
            fontSize: 25,
          ),
        ),
        centerTitle: true,
        backgroundColor: Color(0xFFFDE7E0),
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.pop(context); // Regresar a la pantalla anterior
          },
        ),
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFFFDE7E0), Color(0xFFFEF3F0)],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Obx(() {
          // Usar Obx para escuchar cambios en wishlistItems
          final wishlistItems = controller.wishlistItems;

          return Column(
            children: [
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
                    color: Colors.black,
                  ),
                ),
              ),
            ],
          );
        }),
      ),
    );
  }
}