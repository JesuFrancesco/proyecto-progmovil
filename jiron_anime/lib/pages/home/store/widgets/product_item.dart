import 'package:flutter/material.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/product/producto_page.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';

class ProductItem extends StatelessWidget {
  final Product manga;

  const ProductItem({
    super.key,
    required this.manga,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 250,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(10),
            child: Image.network(manga.productAttachments![0].imageUrl!),
          ),
        ),
        5.pv,
        Text(
          manga.name!.toUpperCase(),
          style: const TextStyle(fontWeight: FontWeight.bold),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
        ),
        Text(
          manga.name!,
          style: const TextStyle(fontWeight: FontWeight.w400),
          textAlign: TextAlign.center,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
        ),
        Text(
          manga.formato!,
          style: const TextStyle(fontWeight: FontWeight.w300),
          textAlign: TextAlign.center,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
        ),
        const SizedBox(height: 10),
        ElevatedButton(
          onPressed: () {
            Navigator.of(context).push(
              // TODO: cambiarlo por un request a producto en especifico en lugar de pasar el producto del TiendaPage
              MaterialPageRoute(
                builder: (context) => ProductoPage(
                  producto: manga,
                ),
              ),
            );
          },
          style: ElevatedButton.styleFrom(
            foregroundColor: Colors.white,
            backgroundColor: AppColors.primaryColor,
          ),
          child: const Text("MÁS INFO"),
        ),
      ],
    );
  }
}
