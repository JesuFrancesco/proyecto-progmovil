import 'package:async/async.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/shopping_cart_controller.dart';
import 'package:jiron_anime/controllers/wishlist_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/auth_service.dart';
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
  final cartMemoizer = AsyncMemoizer();
  final wishlistMemoizer = AsyncMemoizer();

  final numeroItems = 1.obs;
  final addCartLoading = false.obs;
  final wishlistLoading = false.obs;

  final _wishlistController = Get.put(WishlistController());
  final _shoppingCartController = Get.put(ShoppingCartController());

  void _increaseCount() =>
      numeroItems.value += numeroItems.value < widget.producto.stock! ? 1 : 0;

  void _decreaseCount() => numeroItems.value -= numeroItems.value > 1 ? 1 : 0;

  bool get estaEnLaWishlist => _wishlistController.wishlist.value.wishlistItems!
      .map((e) => e.productId)
      .contains(widget.producto.id);

  bool get estaEnElCarrito => _shoppingCartController.carrito.value.cartItems!
      .map((e) => e.productId)
      .contains(widget.producto.id);

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
                      future: AuthService.isLoggedIn ? obtenerCarrito() : null,
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
            }),
            15.pv,
            Row(children: [
              const Icon(Icons.chat),
              15.ph,
              const Text("Dejar reseña")
            ]),
            15.pv,
            GestureDetector(
              onTap: () => showModalBottomSheet<void>(
                context: context,
                isScrollControlled: true,
                builder: (BuildContext context) {
                  return Padding(
                    padding: EdgeInsets.only(
                      bottom: MediaQuery.of(context).viewInsets.bottom,
                    ),
                    child: SizedBox(
                      height: 320,
                      child: SingleChildScrollView(
                        child: Padding(
                          padding: const EdgeInsets.all(16.0),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: <Widget>[
                              Text(
                                'Realiza una pregunta',
                                style: Theme.of(context).textTheme.titleMedium,
                                textAlign: TextAlign.center,
                              ),
                              20.pv,
                              const TextField(
                                decoration: InputDecoration(
                                  labelText: 'Asunto',
                                  border: OutlineInputBorder(
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(30.0)),
                                  ),
                                ),
                              ),
                              20.pv,
                              const TextField(
                                decoration: InputDecoration(
                                  labelText: 'Justificación',
                                  border: OutlineInputBorder(
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(10.0)),
                                  ),
                                ),
                              ),
                              30.pv,
                              ElevatedButton(
                                child: const Text('Enviar'),
                                onPressed: () {},
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  );
                },
              ),
              child: Row(children: [
                const Icon(Icons.question_mark),
                15.ph,
                const Text("Preguntar")
              ]),
            )
          ],
        ),
      ],
    );
  }

  GestureDetector getAddToWishlistButton() {
    if (!AuthService.isLoggedIn) {
      return GestureDetector(
        onTap: () => handleAgregarAWishlist(widget.producto),
        child: Row(children: [
          const Icon(Icons.favorite_border_outlined),
          15.ph,
          const Text("Añadir a lista de deseados")
        ]),
      );
    }

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

  Future<void> obtenerCarrito() async => await cartMemoizer.runOnce(() async {
        await _shoppingCartController.obtenerMiCarrito();
      });

  Future<void> obtenerWishlist() async =>
      await wishlistMemoizer.runOnce(() async {
        await _wishlistController.obtenerMiWishlist();
      });

  Future<void> handleAgregarAlCarrito() async {
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
}
