//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'client.dart';
import 'notification.dart';

class ClientNotification implements ToJson {
  int? clientId;
  int? notificationId;
  Client? client;
  Notification? notification;

  ClientNotification({
    this.clientId,
    this.notificationId,
    this.client,
    this.notification,
  });

  factory ClientNotification.fromJson(Map<String, dynamic> json) =>
      ClientNotification(
          clientId: json['clientId'] as int?,
          notificationId: json['notificationId'] as int?,
          client: json['client'] != null
              ? Client.fromJson(json['client'] as Map<String, dynamic>)
              : null,
          notification: json['notification'] != null
              ? Notification.fromJson(
                  json['notification'] as Map<String, dynamic>)
              : null);

  ClientNotification copyWith({
    int? clientId,
    int? notificationId,
    Client? client,
    Notification? notification,
  }) {
    return ClientNotification(
        clientId: clientId ?? this.clientId,
        notificationId: notificationId ?? this.notificationId,
        client: client ?? this.client,
        notification: notification ?? this.notification);
  }

  ClientNotification copyWithInstance(ClientNotification clientNotification) {
    return ClientNotification(
        clientId: clientNotification.clientId ?? clientId,
        notificationId: clientNotification.notificationId ?? notificationId,
        client: clientNotification.client ?? client,
        notification: clientNotification.notification ?? notification);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (clientId != null) 'clientId': clientId,
        if (notificationId != null) 'notificationId': notificationId,
        if (client != null) 'client': client,
        if (notification != null) 'notification': notification
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ClientNotification &&
          runtimeType == other.runtimeType &&
          clientId == other.clientId &&
          notificationId == other.notificationId &&
          client == other.client &&
          notification == other.notification;

  @override
  int get hashCode =>
      clientId.hashCode ^
      notificationId.hashCode ^
      client.hashCode ^
      notification.hashCode;
}
