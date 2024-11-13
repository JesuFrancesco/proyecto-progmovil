import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:jiron_anime/main.dart';

const AndroidNotificationChannel channel = AndroidNotificationChannel(
    'download_channel', 'Downloads',
    description: 'Este canal se utiliza para notificar sobre descargas.',
    importance: Importance.high,
    playSound: true);

Future<void> showDownloadNotification(String filePath, String orderId) async {
  final AndroidNotificationDetails androidDetails = AndroidNotificationDetails(
    channel.id,
    channel.name,
    channelDescription: channel.description,
    importance: Importance.high,
    priority: Priority.high,
    playSound: true,
  );

  NotificationDetails notificationDetails =
      NotificationDetails(android: androidDetails);

  await flutterLocalNotificationsPlugin.show(
    0,
    'Recibo descargado',
    'El recibo para la orden #$orderId ha sido guardado',
    notificationDetails,
    payload: filePath,
  );
}
