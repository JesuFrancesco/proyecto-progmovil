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
    return Row(
      children: [
        SizedBox(
            height: 200,
            child:
                Image.asset(widget.producto.productAttachments![0].imageUrl!)),
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
