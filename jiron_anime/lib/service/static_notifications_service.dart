import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;

import '../models/notification.dart';

class StaticNotificationsService {
  Future<List<Notification>> fetchAll() async {
    List<Notification> notificaciones = [];
    final String response =
        await rootBundle.loadString('static/notificaciones_sintetica.json');

    final List<dynamic> data = jsonDecode(response);
    notificaciones = data
        .map((map) => Notification.fromJson(map as Map<String, dynamic>))
        .toList();

    return notificaciones;
  }
}
