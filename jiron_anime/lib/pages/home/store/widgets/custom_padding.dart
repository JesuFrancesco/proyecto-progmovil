import 'package:flutter/material.dart';

class CustomPadding extends StatelessWidget {
  const CustomPadding({super.key, required this.child});

  final Widget child; // no va a cambiar

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
      child: child,
    );
  }
}
