import 'package:flutter/material.dart';
import 'package:jiron_anime/controllers/shopping_cart_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/utils/extensions.dart';
//import 'shopping_cart_controller.dart';

class InfoComic extends StatefulWidget {
  final Product producto;

  const InfoComic({super.key, required this.producto});

  @override
  State<InfoComic> createState() => _InfoComicState();
}

class _InfoComicState extends State<InfoComic> {
  int _itemCount = 1;
  final ShoppingCartController _shoppingCartController =
      ShoppingCartController();

  void _increaseCount() {
    setState(() {
      _itemCount++;
    });
  }

  void _decreaseCount() {
    if (_itemCount > 1) {
      setState(() {
        _itemCount--;
      });
    }
  }

  Future<void> _addToCart() async {
    int? productId = widget.producto.id;

    if (productId != null) {
      int cartId = 1;
      await _shoppingCartController.addProductToCart(
          cartId, productId, _itemCount);
      Navigator.of(context.mounted ? context : context).pushNamed('/cart');
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Error: El producto no tiene ID")),
      );
    }
  }

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
        SizedBox(
            child:
                Image.asset(widget.producto.productAttachments![0].imageUrl!)),
        15.pv,
        Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () {
                    _addToCart();
                  },
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.black,
                    backgroundColor: Colors.yellow,
                  ),
                  child: const Text("Agregar\nal carrito",
                      style: TextStyle(fontWeight: FontWeight.bold)),
                ),
                IconButton(
                  icon: const Icon(Icons.remove),
                  onPressed: _decreaseCount,
                ),
                Text('$_itemCount', style: const TextStyle(fontSize: 20)),
                IconButton(
                  icon: const Icon(Icons.add),
                  onPressed: _increaseCount,
                ),
              ],
            ),
            15.pv,
            Row(children: [
              const Icon(Icons.favorite_border_outlined),
              15.ph,
              const Text("Añadir a lista de deseados")
            ]),
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
}
