import 'package:flutter/material.dart';

class ImageErrorPlaceholder extends StatelessWidget {
  const ImageErrorPlaceholder({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
        height: 512,
        color: Colors.white.withOpacity(0.3),
        child: const Center(
          child: Icon(
            Icons.help_outline,
            color: Colors.grey,
            size: 40,
          ),
        ));
  }
}
