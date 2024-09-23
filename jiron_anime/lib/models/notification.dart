//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'user_notification.dart';

class Notification implements ToJson, Id {
  @override
  int? id;
  String? title;
  String? description;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? imageUrl;
  List<UserNotification>? userNotifications;
  int? $userNotificationsCount;

  Notification({
    this.id,
    this.title,
    this.description,
    this.createdAt,
    this.updatedAt,
    this.imageUrl,
    this.userNotifications,
    this.$userNotificationsCount,
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
      userNotifications: json['userNotifications'] != null
          ? createModels<UserNotification>(
              json['userNotifications'], UserNotification.fromJson)
          : null,
      $userNotificationsCount: json['_count']?['userNotifications'] as int?);

  Notification copyWith({
    int? id,
    String? title,
    String? description,
    DateTime? createdAt,
    DateTime? updatedAt,
    String? imageUrl,
    List<UserNotification>? userNotifications,
    int? $userNotificationsCount,
  }) {
    return Notification(
        id: id ?? this.id,
        title: title ?? this.title,
        description: description ?? this.description,
        createdAt: createdAt ?? this.createdAt,
        updatedAt: updatedAt ?? this.updatedAt,
        imageUrl: imageUrl ?? this.imageUrl,
        userNotifications: userNotifications ?? this.userNotifications,
        $userNotificationsCount:
            $userNotificationsCount ?? this.$userNotificationsCount);
  }

  Notification copyWithInstance(Notification notification) {
    return Notification(
        id: notification.id ?? id,
        title: notification.title ?? title,
        description: notification.description ?? description,
        createdAt: notification.createdAt ?? createdAt,
        updatedAt: notification.updatedAt ?? updatedAt,
        imageUrl: notification.imageUrl ?? imageUrl,
        userNotifications: notification.userNotifications ?? userNotifications,
        $userNotificationsCount:
            notification.$userNotificationsCount ?? $userNotificationsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (title != null) 'title': title,
        if (description != null) 'description': description,
        if (createdAt != null) 'createdAt': createdAt,
        if (updatedAt != null) 'updatedAt': updatedAt,
        if (imageUrl != null) 'imageUrl': imageUrl,
        if (userNotifications != null)
          'userNotifications':
              userNotifications?.map((item) => item.toJson()).toList(),
        if ($userNotificationsCount != null)
          '_count': {
            if ($userNotificationsCount != null)
              'userNotifications': $userNotificationsCount,
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
          areListsEqual(userNotifications, other.userNotifications) &&
          $userNotificationsCount == other.$userNotificationsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      title.hashCode ^
      description.hashCode ^
      createdAt.hashCode ^
      updatedAt.hashCode ^
      imageUrl.hashCode ^
      userNotifications.hashCode ^
      $userNotificationsCount.hashCode;
}
