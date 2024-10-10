import 'package:flutter/material.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'wishlist_product.dart';

class WishlistItemWidget extends StatelessWidget {
  final Product product;
  final VoidCallback onRemove;

  const WishlistItemWidget({
    super.key,
    required this.product,
    required this.onRemove,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16.0), // Espaciado interno
      margin: const EdgeInsets.symmetric(vertical: 8.0), // Margen vertical
      decoration: BoxDecoration(
        color: Colors.transparent, // Fondo transparente
        borderRadius: BorderRadius.circular(12.0), // Bordes redondeados
      ),
      child: Row(
        crossAxisAlignment:
            CrossAxisAlignment.center, // Alinear el contenido al inicio
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(8.0),
            child: Image.network(
              product.imageUrl,
              fit: BoxFit.cover,
              width: 70, // Ancho de la imagen
              height: 100, // Alto de la imagen
            ),
          ),
          const SizedBox(width: 16), // Espacio entre la imagen y el texto
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  product.name,
                  style: const TextStyle(
                    fontSize: 16, // Tamaño de fuente del nombre
                    fontWeight: FontWeight.bold,
                  ),
                  overflow:
                      TextOverflow.ellipsis, // Evita desbordamiento del nombre
                ),
                const SizedBox(height: 4), // Espacio entre nombre y precio
                Text(
                  'S/. ${product.price.toStringAsFixed(2)}',
                  style: const TextStyle(
                    fontSize: 14,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  product.description,
                  style: const TextStyle(
                    fontSize: 12,
                  ),
                ),
                const SizedBox(height: 8),
                ElevatedButton(
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primaryColor,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                  ),
                  child: const Text(
                    'VER EN TIENDA',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
          IconButton(
            icon: const Icon(Icons.delete),
            onPressed: onRemove,
          ),
        ],
      ),
    );
  }
}
