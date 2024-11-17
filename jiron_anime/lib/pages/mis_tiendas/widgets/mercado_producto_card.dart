import 'package:flutter/material.dart';
import 'package:jiron_anime/models/product.dart';

class MercadoProductWidget extends StatelessWidget {
  const MercadoProductWidget({
    super.key,
    required this.product,
  });

  final Product? product;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.grey.shade300,
          width: 1,
        ),
        borderRadius: BorderRadius.circular(8),
      ),
      child: ListTile(
        contentPadding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
        title: Text(product?.name ?? "Producto sin nombre"),
        subtitle: Text(
          "Precio: \$${product?.price ?? 'No disponible'}",
        ),
        onTap: () {},
      ),
    );
  }
}
