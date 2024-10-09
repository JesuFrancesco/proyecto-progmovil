// ignore_for_file: unnecessary_const

import 'package:flutter/material.dart';
import 'package:jiron_anime/utils/extensions.dart';

class InfoComic extends StatefulWidget {
  final String comicName;
  final String comicImage;

  const InfoComic(
      {super.key, required this.comicName, required this.comicImage});

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
        SizedBox(height: 200, child: Image.asset(widget.comicImage)),
        15.ph,
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(widget.comicName.toUpperCase(),
                  style: const TextStyle(
                      fontWeight: FontWeight.bold, fontSize: 25)),
              const Text("Kioskos argentinos",
                  style: const TextStyle(fontWeight: FontWeight.bold)),
              const Text("S/. 59.00"),
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
                    child: const Text("Agregar \nal carrito",
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
              const Row(children: [
                Icon(Icons.favorite),
                Text("Agregar a la lista de deseados")
              ]),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(children: [
                    const Icon(Icons.chat),
                    10.ph,
                    const Text("Agregar \nresena")
                  ]),
                  Row(children: [
                    const Icon(Icons.chat),
                    10.ph,
                    const Text("Agregar \ncomentario")
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
