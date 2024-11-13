import 'dart:io';

import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:jiron_anime/main.dart';
import 'package:jiron_anime/notification/download_notifications.dart';

Future<void> initializeLocaleNotifications() async {
  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.createNotificationChannel(channel);

  AndroidInitializationSettings initializationSettingsAndroid =
      const AndroidInitializationSettings('@mipmap/ic_launcher');

  InitializationSettings initializationSettings = InitializationSettings(
    android: initializationSettingsAndroid,
  );

  flutterLocalNotificationsPlugin.initialize(initializationSettings,
      onDidReceiveNotificationResponse:
          (NotificationResponse notificationResponse) async {
    if (notificationResponse.payload != null) {
      File(notificationResponse.payload!).open();
    }
  });
}
