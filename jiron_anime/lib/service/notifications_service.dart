import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:jiron_anime/config/config.dart';
// import 'package:flutter/services.dart' show rootBundle;
import '../models/notification.dart';

class NotificationsService {
  Future<List<Notification>> fetchAll() async {
    List<Notification> notificaciones = [];
    final response =
        await http.get(Uri.parse("${Config.serverURL}/notification"));
    // await rootBundle.loadString('static/notifications.json');

    if (response.statusCode != 200) {
      throw Error();
    }

    final List<dynamic> data = jsonDecode(response.body);
    notificaciones = data
        .map((map) => Notification.fromJson(map as Map<String, dynamic>))
        .toList();

    return notificaciones;
  }
}
