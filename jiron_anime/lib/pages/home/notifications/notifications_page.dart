import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/pages/home/controllers/notifications_controller.dart';
import 'package:jiron_anime/pages/home/notifications/widget/notifcation_card.dart';

NotificationsController notificationsController =
    Get.put(NotificationsController());

class NotificationsPage extends StatelessWidget {
  final BuildContext context;
  const NotificationsPage({super.key, required this.context});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NotificationsColumn(
          items: notificationsController.notificaciones.toList()),
    );
  }
}
