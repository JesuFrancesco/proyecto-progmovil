//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'client_notification.dart';

class Notification implements ToJson, Id {
  @override
  int? id;
  String? title;
  String? description;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? imageUrl;
  List<ClientNotification>? clientNotifications;
  int? $clientNotificationsCount;

  Notification({
    this.id,
    this.title,
    this.description,
    this.createdAt,
    this.updatedAt,
    this.imageUrl,
    this.clientNotifications,
    this.$clientNotificationsCount,
  });

  factory Notification.fromJson(Map<String, dynamic> json) => Notification(
      id: json['id'] as int?,
      title: json['title'] as String?,
      description: json['description'] as String?,
      createdAt:
          json['createdAt'] != null ? DateTime.parse(json['createdAt']) : null,
      updatedAt:
          json['updatedAt'] != null ? DateTime.parse(json['updatedAt']) : null,
      imageUrl: json['imageUrl'] as String?,
      clientNotifications: json['clientNotifications'] != null
          ? createModels<ClientNotification>(
              json['clientNotifications'], ClientNotification.fromJson)
          : null,
      $clientNotificationsCount:
          json['_count']?['clientNotifications'] as int?);

  Notification copyWith({
    int? id,
    String? title,
    String? description,
    DateTime? createdAt,
    DateTime? updatedAt,
    String? imageUrl,
    List<ClientNotification>? clientNotifications,
    int? $clientNotificationsCount,
  }) {
    return Notification(
        id: id ?? this.id,
        title: title ?? this.title,
        description: description ?? this.description,
        createdAt: createdAt ?? this.createdAt,
        updatedAt: updatedAt ?? this.updatedAt,
        imageUrl: imageUrl ?? this.imageUrl,
        clientNotifications: clientNotifications ?? this.clientNotifications,
        $clientNotificationsCount:
            $clientNotificationsCount ?? this.$clientNotificationsCount);
  }

  Notification copyWithInstance(Notification notification) {
    return Notification(
        id: notification.id ?? id,
        title: notification.title ?? title,
        description: notification.description ?? description,
        createdAt: notification.createdAt ?? createdAt,
        updatedAt: notification.updatedAt ?? updatedAt,
        imageUrl: notification.imageUrl ?? imageUrl,
        clientNotifications:
            notification.clientNotifications ?? clientNotifications,
        $clientNotificationsCount: notification.$clientNotificationsCount ??
            $clientNotificationsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (title != null) 'title': title,
        if (description != null) 'description': description,
        if (createdAt != null) 'createdAt': createdAt,
        if (updatedAt != null) 'updatedAt': updatedAt,
        if (imageUrl != null) 'imageUrl': imageUrl,
        if (clientNotifications != null)
          'clientNotifications':
              clientNotifications?.map((item) => item.toJson()).toList(),
        if ($clientNotificationsCount != null)
          '_count': {
            if ($clientNotificationsCount != null)
              'clientNotifications': $clientNotificationsCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Notification &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          title == other.title &&
          description == other.description &&
          createdAt == other.createdAt &&
          updatedAt == other.updatedAt &&
          imageUrl == other.imageUrl &&
          areListsEqual(clientNotifications, other.clientNotifications) &&
          $clientNotificationsCount == other.$clientNotificationsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      title.hashCode ^
      description.hashCode ^
      createdAt.hashCode ^
      updatedAt.hashCode ^
      imageUrl.hashCode ^
      clientNotifications.hashCode ^
      $clientNotificationsCount.hashCode;
}
