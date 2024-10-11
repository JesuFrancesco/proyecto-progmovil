import 'package:flutter/material.dart';
import 'package:jiron_anime/controllers/SHOPPING_CART_CONTROLLER.dart';
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
  final ShoppingCartController _shoppingCartController = ShoppingCartController();

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
    int cartId = 1; // Usar el ID de un carrito existente o crear uno nuevo
    await _shoppingCartController.addProductToCart(cartId, productId, _itemCount);
    Navigator.pushNamed(context, '/cart'); // Redirige a la pantalla del carrito
  } else {
    // Muestra un mensaje de error o maneja el caso en el que el producto no tiene ID
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text("Error: El producto no tiene ID")),
    );
  }
}


  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        SizedBox(
  height: 200,
  child: widget.producto.productAttachments != null && widget.producto.productAttachments!.isNotEmpty
      ? Image.asset(widget.producto.productAttachments![0].imageUrl!)
      : const Text("No hay imagen disponible"),
),

        15.ph,
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(widget.producto.name!.toUpperCase(),
                  style: const TextStyle(
                      fontWeight: FontWeight.bold, fontSize: 25)),
              Text(
                  widget.producto.market != null
                      ? widget.producto.market!.name!
                      : "Kioskos argentos",
                  style: const TextStyle(fontWeight: FontWeight.bold)),
              Text("S/. ${widget.producto.price.toString()}"),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: _addToCart,  // Llamamos a la función para agregar al carrito
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
              Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    const Icon(Icons.favorite),
                    10.ph,
                    const Text("Añadir a lista de deseados")
                  ]),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Row(children: [
                    const Icon(Icons.chat),
                    10.ph,
                    const Text("Dejar\nreseña")
                  ]),
                  Row(children: [
                    const Icon(Icons.question_mark),
                    10.ph,
                    const Text("Preguntar")
                  ])
                ],
              )
            ],
          ),
        )
      ],
    );
  }
}
