import 'package:get/get.dart';
import 'package:jiron_anime/service/notifications_service.dart';

import '../models/notification.dart';

class NotificationsController extends GetxController {
  NotificationsService service = NotificationsService();
  final notificaciones = <Notification>[].obs;

  Future<void> obtenerNotificaciones() async {
    notificaciones.value = await service.fetchAll();
  }
}
