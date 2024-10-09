import 'package:flutter/material.dart';
import 'package:jiron_anime/models/notification.dart' as m;

class NotificationsColumn extends StatefulWidget {
  final List<m.Notification> items;

  const NotificationsColumn({super.key, required this.items});

  @override
  State<NotificationsColumn> createState() => _NotificationsColumnState();
}

class _NotificationsColumnState extends State<NotificationsColumn> {
  late List<m.Notification> _items;

  @override
  void initState() {
    super.initState();
    _items = List.from(widget.items);
  }

  void _removeItem(int index) {
    setState(() {
      _items.removeAt(index);
      // TODO: lógica para quitar notificaciones de la DBMS
    });
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: [
          Text(
            "Notificaciones",
            style: Theme.of(context).textTheme.titleLarge,
          ),
          Column(
            children: _items.asMap().entries.map((entry) {
              final index = entry.key;
              final item = entry.value;
              return NotificacionRemovableWidget(
                item: item,
                onDismissed: () => _removeItem(index),
              );
            }).toList(),
          ),
        ],
      ),
    );
  }
}

class NotificacionRemovableWidget extends StatelessWidget {
  final m.Notification item;
  final VoidCallback onDismissed;

  const NotificacionRemovableWidget({
    super.key,
    required this.item,
    required this.onDismissed,
  });

  @override
  Widget build(BuildContext context) {
    return Dismissible(
      key: UniqueKey(),
      direction: DismissDirection.horizontal,
      onDismissed: (_) => onDismissed(),
      background: Container(
        alignment: Alignment.centerRight,
        padding: const EdgeInsets.only(right: 20.0),
        color: Colors.red,
        child: const Icon(Icons.delete, color: Colors.white),
      ),
      child: Card(
        margin: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.network(
              item.imageUrl!,
              fit: BoxFit.cover,
              width: double.infinity,
              height: 100,
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    item.title!,
                    style: Theme.of(context).textTheme.headlineSmall,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    item.description!,
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
