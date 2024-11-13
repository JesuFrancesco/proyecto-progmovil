import 'package:flutter/material.dart';
import 'package:jiron_anime/models/product.dart';
import 'package:jiron_anime/utils/extensions.dart';

class ReseniaButton extends StatelessWidget {
  final Product producto;
  const ReseniaButton({super.key, required this.producto});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {},
      child: Row(children: [
        const Icon(Icons.chat),
        15.ph,
        const Text("Dejar reseña")
      ]),
    );
  }
}
