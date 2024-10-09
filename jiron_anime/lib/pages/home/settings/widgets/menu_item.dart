import 'package:flutter/material.dart';

class NotificationItem extends StatelessWidget {
  final BuildContext context;
  final VoidCallback? fnOnTap;
  final IconData icon;
  final String text;

  const NotificationItem({
    super.key,
    required this.context,
    required this.icon,
    required this.text,
    this.fnOnTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: fnOnTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 16),
        child: Row(
          children: [
            Icon(icon, size: 24),
            const SizedBox(width: 16),
            Expanded(
              child: Text(
                text,
                style: Theme.of(context).textTheme.titleMedium,
              ),
            ),
            const Icon(Icons.chevron_right, size: 24),
          ],
        ),
      ),
    );
  }
}
