import 'package:flutter/material.dart';
import 'package:jiron_anime/utils/extensions.dart';

class InfoComic extends StatefulWidget {
  final String comicName;
  final String comicImage;

  const InfoComic({Key? key, required this.comicName, required this.comicImage}) : super(key: key);

  @override
  _InfoComicState createState() => _InfoComicState();
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
              Text(widget.comicName.toUpperCase(), style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25)),
              Text("Kioskos argentinos", style: TextStyle(fontWeight: FontWeight.bold)),
              Text("S/. 59.00"),
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
                    child: const Text("Agregar \nal carrito", style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
             
                  IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: _decreaseCount,
                  ),
                  
                  Text('$_itemCount', style: TextStyle(fontSize: 20)),
                 
                  IconButton(
                    icon: Icon(Icons.add),
                    onPressed: _increaseCount,
                  ),

                  
                ],
              ),
              Row(children: [
                Icon(Icons.favorite),
                Text("Agregar a la lista de deseados")
              ]),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(children: [
                    Icon(Icons.chat),
                    10.ph,
                    Text("Agregar \nresena")
                  ]),
                  Row(children: [
                    Icon(Icons.chat),
                    10.ph,
                    Text("Agregar \ncomentario")
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
