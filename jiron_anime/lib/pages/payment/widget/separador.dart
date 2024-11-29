import 'package:flutter/material.dart';

class Separador extends StatelessWidget {
  const Separador({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.all(8.0),
      child: Divider(),
    );
  }
}
