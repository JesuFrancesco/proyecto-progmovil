import 'package:flutter/material.dart' hide Notification;
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/notifications_controller.dart';
import 'package:jiron_anime/models/notification.dart';
import 'package:jiron_anime/pages/home/notifications/widget/notification_widget.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_padding.dart';

final NotificationsController notificationController =
    Get.put(NotificationsController());

class NotificationsPage extends StatefulWidget {
  final BuildContext context;

  const NotificationsPage({super.key, required this.context});

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
    return CustomPadding(
      child: Scaffold(
          body: _items.isEmpty
              ? const Center(child: CircularProgressIndicator())
              : SingleChildScrollView(
                  child: Column(
                    children: [
                      const CustomAppbar(title: "Notificaciones"),
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
                )),
    );
  }
}
