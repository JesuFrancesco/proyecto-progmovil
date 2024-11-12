import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/shopping_cart_controller.dart';
import 'package:jiron_anime/controllers/wishlist_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/shared/dialogs.dart';
import 'package:jiron_anime/shared/small_circular_indicator.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';

class ProductoInfo extends StatefulWidget {
  final Product producto;

  const ProductoInfo({super.key, required this.producto});

  @override
  State<ProductoInfo> createState() => _ProductoInfoState();
}

class _ProductoInfoState extends State<ProductoInfo> {
  final numeroItems = 1.obs;
  final addCartLoading = false.obs;
  final wishlistLoading = false.obs;

  final _wishlistController = WishlistController();
  final _shoppingCartController = ShoppingCartController();

  void _increaseCount() =>
      numeroItems.value += numeroItems.value < widget.producto.stock! ? 1 : 0;

  void _decreaseCount() => numeroItems.value -= numeroItems.value > 1 ? 1 : 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(widget.producto.name!,
            style: Theme.of(context).textTheme.headlineLarge),
        Text(
            widget.producto.market != null
                ? widget.producto.market!.name!
                : "NA",
            style: Theme.of(context).textTheme.headlineMedium),
        Text("S/. ${widget.producto.price.toString()}"),
        15.pv,
        Center(
          child: SizedBox(
              child: Image.network(
            widget.producto.productAttachments![0].imageUrl!,
            errorBuilder: (context, error, stackTrace) {
              return Container(
                color: Colors.white
                    .withOpacity(0.3), // Semi-transparent white background
                child: const Center(
                  child: Icon(
                    Icons.help_outline,
                    color: Colors.grey,
                    size: 40,
                  ),
                ),
              );
            },
          )),
        ),
        15.pv,
        Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Obx(() {
                  if (addCartLoading.value) {
                    return const SmallCircularIndicator();
                  } else {
                    return FutureBuilder(
                      future: obtenerCarrito(),
                      builder: (ctx, snapshot) {
                        if (snapshot.connectionState ==
                            ConnectionState.waiting) {
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
                  onPressed: _decreaseCount,
                ),
                Obx(() =>
                    Text('$numeroItems', style: const TextStyle(fontSize: 20))),
                IconButton(
                  icon: const Icon(Icons.add),
                  onPressed: _increaseCount,
                ),
              ],
            ),
            15.pv,
            Obx(() {
              if (wishlistLoading.value) {
                return const SmallCircularIndicator();
              } else {
                return FutureBuilder(
                  future: obtenerWishlist(),
                  builder: (ctx, snapshot) {
                    if (snapshot.connectionState == ConnectionState.waiting) {
                      return const SmallCircularIndicator();
                    } else {
                      return getAddToWishlistButton();
                    }
                  },
                );
              }
            }),
            15.pv,
            Row(children: [
              const Icon(Icons.chat),
              15.ph,
              const Text("Dejar reseña")
            ]),
            15.pv,
            Row(children: [
              const Icon(Icons.question_mark),
              15.ph,
              const Text("Preguntar")
            ])
          ],
        ),
      ],
    );
  }

  GestureDetector getAddToWishlistButton() {
    final estaEnLaWishlist = _wishlistController.wishlist.value.wishlistItems!
        .any((element) => element.productId == widget.producto.id);

    return GestureDetector(
      onTap: estaEnLaWishlist
          ? () => handleQuitarDeWishlist(widget.producto)
          : () => handleAgregarAWishlist(widget.producto),
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

  ElevatedButton getAddToCartButton() {
    final estaEnElCarrito = _shoppingCartController.carrito.value.cartItems!
        .any((element) => element.productId == widget.producto.id);
    return estaEnElCarrito
        ? ElevatedButton(
            onPressed: () => Get.toNamed("/cart"),
            child: const Text("Ver en el carrito"))
        : ElevatedButton(
            onPressed: () {
              agregarAlCarrito();
            },
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

  Future<void> obtenerCarrito() async =>
      await _shoppingCartController.obtenerMiCarrito();

  Future<void> obtenerWishlist() async =>
      await _wishlistController.obtenerMiWishlist();

  Future<void> agregarAlCarrito() async {
    addCartLoading.value = true;
    final productId = widget.producto.id;

    if (productId != null) {
      await _shoppingCartController.agregarProductoAlCarrito(
          productId, numeroItems.value);

      Get.toNamed("/cart");
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Error: El producto no tiene ID")),
      );
    }
    addCartLoading.value = false;
  }

  Future<void> handleAgregarAWishlist(Product producto) async {
    try {
      wishlistLoading.value = true;
      await _wishlistController.agregarItemAWishlist(producto.id!);
      await _wishlistController.obtenerMiWishlist();
    } catch (e) {
      Get.dialog(const ErrorDialog(message: "Algo salio mal en wishlist."));
    } finally {
      wishlistLoading.value = false;
    }
  }

  Future<void> handleQuitarDeWishlist(Product producto) async {
    try {
      wishlistLoading.value = true;
      await _wishlistController.removerItemDeWishlist(producto.id!);
      await _wishlistController.obtenerMiWishlist();
    } catch (e) {
      Get.dialog(const ErrorDialog(message: "Algo salio mal en wishlist."));
    } finally {
      wishlistLoading.value = false;
    }
  }
}
