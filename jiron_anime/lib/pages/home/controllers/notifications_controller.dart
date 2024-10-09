import 'package:get/get.dart';
import 'package:jiron_anime/service/static_notifications_service.dart';

import '../../../models/notification.dart';

class NotificationsController extends GetxController {
  StaticNotificationsService service = StaticNotificationsService();
  final notificaciones = <Notification>[].obs;

  void obtenerNotificaciones() async {
    notificaciones.value = await service.fetchAll();
  }
}
