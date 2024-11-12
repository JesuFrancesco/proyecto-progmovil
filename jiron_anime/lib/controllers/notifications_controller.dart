import 'package:get/get.dart';
import 'package:jiron_anime/service/notification_service.dart';

import '../models/notification.dart';

class NotificationsController extends GetxController {
  final service = NotificationsService();
  final notificaciones = <Notification>[].obs;

  Future<void> obtenerNotificaciones() async {
    notificaciones.value = await service.fetchAll();
  }
}
