import 'package:flutter/material.dart' hide Notification;
import 'package:jiron_anime/controllers/notifications_controller.dart';
import 'package:jiron_anime/models/notification.dart';
import 'package:jiron_anime/pages/home/notifications/widget/notification_widget.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';

final NotificationsController notificationController =
    NotificationsController();

class NotificationsPage extends StatefulWidget {
  const NotificationsPage({super.key});

  @override
  State<NotificationsPage> createState() => _NotificationsPageState();
}

class _NotificationsPageState extends State<NotificationsPage> {
  late List<Notification> _items = [];

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    await notificationController.obtenerNotificaciones();
    setState(() {
      _items = notificationController.notificaciones.toList();
    });
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
      body: CustomLayout(
        child: CustomScrollView(slivers: [
          SliverFillRemaining(
            hasScrollBody: false,
            child: Column(
              children: [
                const CustomAppbar(title: "Notificaciones"),
                _items.isEmpty
                    ? const Expanded(
                        child: Center(child: CircularProgressIndicator()))
                    : Column(
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
          )
        ]),
      ),
    );
  }
}
