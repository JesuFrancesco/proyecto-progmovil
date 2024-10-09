import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';
import 'package:jiron_anime/pages/home/store/widgets/botones.dart';
import 'package:jiron_anime/pages/home/store/widgets/custom_padding.dart';
import 'package:jiron_anime/pages/home/store/widgets/descripcion.dart';
import 'package:jiron_anime/pages/home/store/widgets/info_comic.dart';
import 'package:jiron_anime/pages/home/store/widgets/pregunta.dart';
import 'package:jiron_anime/pages/home/store/widgets/stock.dart';
import 'package:jiron_anime/utils/extensions.dart';

class Carro extends StatefulWidget {
  final String comicName;
  final String comicImage;

  const Carro({
    super.key,
    required this.comicName,
    required this.comicImage,
  });

  @override
  State<Carro> createState() => _CarroState();
}

class _CarroState extends State<Carro> {
  Widget _currentContent = const Descripcion();

  // Métodos para mostrar contenido
  void _showDescripcion() {
    setState(() {
      _currentContent = const Descripcion();
    });
  }

  void _showStock() {
    setState(() {
      _currentContent = const Stock();
    });
  }

  void _showPreguntas() {
    setState(() {
      _currentContent = const Preguntas();
    });
  }

  void _navigateToHomePage() {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => TiendaPage()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomPadding(
        child: SingleChildScrollView(
          child: Column(
            children: [
              kToolbarHeight.pv,
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back),
                    onPressed: _navigateToHomePage,
                  ),
                  CircleAvatar(
                    child: Text("WA3"),
                  ),
                ],
              ),
              15.pv,
              InfoComic(
                comicName: widget.comicName,
                comicImage: widget.comicImage,
              ),
              15.pv,
              Botones(
                onDescripcion: _showDescripcion,
                onStock: _showStock,
                onPreguntas: _showPreguntas,
              ),
              Divider(
                color: Colors.grey,
                thickness: 1,
              ),
              _currentContent,
              15.pv,
              Row(
                children: [
                  Text(
                    "Lo más vendido",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                  ),
                ],
              ),
              15.pv,
              Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,

                  // children: [
                  //   SizedBox(height: 150, child: Image.asset("assets/frieren01.jpg")),
                  //   SizedBox(height: 150, child: Image.asset("assets/miroirs.jpg")),
                  //   SizedBox(height: 150, child: Image.asset("assets/deathnote04.jpg")),
                  // ],

                  children: mangaController.productos
                      .toList()
                      .map((manga) => SizedBox(
                            height: 150,
                            child: Image.asset(
                                manga.productAttachments![0].imageUrl!),
                          ))
                      .toList()
                      .sublist(0, 3)),
            ],
          ),
        ),
      ),
    );
  }
}
