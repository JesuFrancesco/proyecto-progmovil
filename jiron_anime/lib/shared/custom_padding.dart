import 'package:flutter/material.dart';

class CustomPadding extends StatelessWidget {
  final double px, py;
  const CustomPadding(
      {super.key, required this.child, this.px = 20, this.py = 4});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: px, vertical: py),
      child: child,
    );
  }
}
