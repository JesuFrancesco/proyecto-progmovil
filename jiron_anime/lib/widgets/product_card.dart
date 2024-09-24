import 'package:flutter/material.dart';

import '../models/product.dart';

class ProductCard extends StatelessWidget {
  final Product product;

  const ProductCard({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      margin: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 16.0),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              product.name ?? 'Unnamed Product',
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8.0),
            Text('Price: \$${product.price?.toStringAsFixed(2) ?? 'N/A'}'),
            Text('Stock: ${product.stock ?? 0}'),
            Text('Dimensions: ${product.dimensions ?? 'N/A'}'),
            if (product.warranty == true) const Text('Warranty: Yes'),
            if (product.discount != null)
              Text('Discount: ${product.discount}%'),
            if (product.peso != null) Text('Weight: ${product.peso} kg'),
            if (product.formato != null) Text('Format: ${product.formato}'),
            if (product.anhoEdicion != null)
              Text('Year of Edition: ${product.anhoEdicion}'),
            if (product.numeroPaginas != null)
              Text('Number of Pages: ${product.numeroPaginas}'),
          ],
        ),
      ),
    );
  }
}
