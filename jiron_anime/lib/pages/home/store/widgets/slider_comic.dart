import 'package:flutter/material.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';

class SliderComic extends StatefulWidget {
  const SliderComic({Key? key}) : super(key: key);

  @override
  _SliderComicState createState() => _SliderComicState();
}

class _SliderComicState extends State<SliderComic> {
  int currentImageIndex = 0;

  final List<Product> comics = mangaController.productos.toList();

  void toggleImage() {
    setState(() {
      currentImageIndex = (currentImageIndex + 1) % comics.length;
    });
  }

  @override
  Widget build(BuildContext context) {
    final currentComic = comics[currentImageIndex];

    return Container(
      margin: const EdgeInsets.symmetric(vertical: 8.0),
      width: double.infinity,
      child: Stack(
        children: [
          ClipRect(
            child: FittedBox(
              fit: BoxFit.cover,
              child: Align(
                alignment: Alignment.topCenter,
                heightFactor: 0.25,
                child: ColorFiltered(
                  colorFilter: ColorFilter.mode(
                    Colors.white.withOpacity(0.3),
                    BlendMode.lighten,
                  ),
                  child: Image.asset(
                      currentComic.productAttachments![0].imageUrl!),
                ),
              ),
            ),
          ),
          Positioned(
            left: 10,
            right: 10,
            top: MediaQuery.of(context).size.height / 15 - 40,
            child: Container(
              padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 10),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.5),
                border: Border.all(color: Colors.black, width: 2),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(
                children: [
                  Center(
                    child: Text(
                      currentComic.name!,
                      style: const TextStyle(
                        color: Colors.black,
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  const SizedBox(height: 0),
                  Center(
                    child: Text(
                      currentComic.name!,
                      style: const TextStyle(
                        color: Colors.black,
                        fontSize: 14.5,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ],
              ),
            ),
          ),
          Positioned(
            left: -5,
            top: MediaQuery.of(context).size.height / 9 - 50,
            child: IconButton(
              icon: const Icon(Icons.arrow_left, color: Colors.black),
              onPressed: toggleImage,
            ),
          ),
          Positioned(
            right: -5,
            top: MediaQuery.of(context).size.height / 9 - 50,
            child: IconButton(
              icon: const Icon(Icons.arrow_right, color: Colors.black),
              onPressed: toggleImage,
            ),
          ),
        ],
      ),
    );
  }
}
