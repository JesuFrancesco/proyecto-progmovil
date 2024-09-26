import 'package:flutter/material.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/widgets/product_card.dart';

import '../models/account.dart';

class AccountCard extends StatelessWidget {
  final Account account;

  const AccountCard({super.key, required this.account});

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
              account.name ?? 'No Name',
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8.0),
            Text('Email: ${account.email ?? 'No Email'}'),
            Text('Role: ${account.role ?? 'No Role'}'),
            Text('Phone: ${account.phone ?? 'No Phone'}'),
            const SizedBox(height: 8.0),
            Text('Markets Count: ${account.$marketsCount ?? 0}'),
            Text('Messages Count: ${account.$messagesCount ?? 0}'),
            (account.markets!.isNotEmpty &&
                    account.markets!.first.products!.isNotEmpty)
                ? Column(
                    children: [
                      Text(
                        "Hay products",
                        style: TextStyle(
                            color: Colors.green[200],
                            fontWeight: FontWeight.bold),
                      ),
                      ...account.markets!.first.products!
                          .map((product) => ProductCard(product: product))
                    ],
                  )
                : const Text(
                    "No hay products",
                    style: TextStyle(color: Colors.red),
                  ),
          ],
        ),
      ),
    );
  }
}
