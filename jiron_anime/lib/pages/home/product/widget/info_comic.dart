// ignore_for_file: unnecessary_const

import 'package:flutter/material.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/utils/extensions.dart';

class InfoComic extends StatefulWidget {
  final Product producto;

  const InfoComic({super.key, required this.producto});

  @override
  State<InfoComic> createState() => _InfoComicState();
}

class _InfoComicState extends State<InfoComic> {
  int _itemCount = 1;

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
                    Navigator.pushNamed(context, '/cart');
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
              const Icon(Icons.favorite),
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
