import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/models/notification.dart' as m;
import 'package:jiron_anime/pages/home/controllers/notifications_controller.dart';
import 'package:jiron_anime/pages/home/notifications/widget/notification_widget.dart';

class NotificationsColumn extends StatefulWidget {
  final List<m.Notification> items;

  const NotificationsColumn({super.key, required this.items});

  @override
  State<NotificationsColumn> createState() => _NotificationsColumnState();
}

class _NotificationsColumnState extends State<NotificationsColumn> {
  late List<m.Notification> _items;
  late Future<void> _dataLoadingFuture;

  final NotificationsController notificationController =
      Get.put(NotificationsController());

  @override
  void initState() {
    super.initState();
    _items = List.from(widget.items);
    _dataLoadingFuture = _loadData();
  }

  Future<void> _loadData() async {
    // Assuming obtenerMangas is the method that fetches manga data
    notificationController.obtenerNotificaciones();
  }

  void _removeItem(int index) {
    setState(() {
      _items.removeAt(index);
      // TODO: lógica para quitar notificaciones de la DBMS
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: FutureBuilder(
            future: _dataLoadingFuture,
            builder: (body, snapshot) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return const Center(child: CircularProgressIndicator());
              } else if (snapshot.hasError) {
                return Center(child: Text('Error: ${snapshot.error}'));
              } else {
                return SingleChildScrollView(
                  child: Column(
                    children: [
                      Text(
                        "Notificaciones",
                        style: Theme.of(context).textTheme.titleLarge,
                        textAlign: TextAlign.center,
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
            }));
  }
}
