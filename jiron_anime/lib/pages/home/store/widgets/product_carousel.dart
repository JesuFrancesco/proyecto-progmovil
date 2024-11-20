import 'package:flutter/material.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';

class ProductCarousel extends StatefulWidget {
  const ProductCarousel({super.key});

  @override
  State<ProductCarousel> createState() => _ProductCarouselState();
}

class _ProductCarouselState extends State<ProductCarousel> {
  int currentImageIndex = 0;

  final List<Product> productos = productoController.productos.toList();

  void toggleImage() {
    setState(() {
      currentImageIndex = (currentImageIndex + 1) % productos.length;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (productos.isEmpty) {
      return const Text("");
    }
    final currentComic = productos[currentImageIndex];

    return Container(
      margin: const EdgeInsets.symmetric(vertical: 8.0),
      width: double.infinity,
      height: 120,
      child: Stack(
        children: [
          // BACKGROUND IMAGE CONTAINER WITH CLIPPING
          ClipRRect(
            borderRadius:
                BorderRadius.circular(0), // Optional: for rectangle shape
            child: SizedBox.expand(
              child: ColorFiltered(
                colorFilter: ColorFilter.mode(
                  Colors.white.withOpacity(0.3),
                  BlendMode.lighten,
                ),
                child: currentComic.productAttachments != null &&
                        currentComic.productAttachments!.isNotEmpty
                    ? Image.network(
                        currentComic.productAttachments![0].imageUrl!,
                        fit: BoxFit.cover,
                      )
                    : Container(
                        color: Colors.white.withOpacity(
                            0.3), // Semi-transparent white background
                        child: const Center(
                          child: Icon(
                            Icons.help_outline,
                            color: Colors.grey,
                            size: 40,
                          ),
                        ),
                      ),
              ),
            ),
          ),
          // MAIN FLEX LAYOUT
          Column(
            children: [
              Expanded(
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    // LEFT ARROW
                    IconButton(
                      icon: const Icon(Icons.arrow_left, color: Colors.black),
                      onPressed: toggleImage,
                    ),
                    // FLEXIBLE TEXT CONTENT WITH ELLIPSIS
                    Expanded(
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                            vertical: 5, horizontal: 10),
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.5),
                          border: Border.all(color: Colors.black, width: 2),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text(
                              currentComic.name!,
                              style: const TextStyle(
                                color: Colors.black,
                                fontSize: 24,
                                fontWeight: FontWeight.bold,
                              ),
                              overflow:
                                  TextOverflow.fade, // Ellipsis for long title
                              maxLines: 1, // Truncate to 1 line
                            ),
                            const SizedBox(height: 0),
                            Text(
                              currentComic.descripcion ?? "No hay descripción",
                              style: const TextStyle(
                                color: Colors.black,
                                fontSize: 14.5,
                              ),
                              textAlign: TextAlign.center,
                              overflow: TextOverflow
                                  .ellipsis, // Ellipsis for long description
                              maxLines: 2, // Limit to 2 lines
                            ),
                          ],
                        ),
                      ),
                    ),
                    // RIGHT ARROW
                    IconButton(
                      icon: const Icon(Icons.arrow_right, color: Colors.black),
                      onPressed: toggleImage,
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
