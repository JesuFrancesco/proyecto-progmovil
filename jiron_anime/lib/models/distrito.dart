//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'provincia.dart';
import 'user.dart';

class Distrito implements ToJson, Id {
  @override
  int? id;
  String? name;
  int? provinciaId;
  Provincia? provincia;
  List<User>? users;
  int? $usersCount;

  Distrito({
    this.id,
    this.name,
    this.provinciaId,
    this.provincia,
    this.users,
    this.$usersCount,
  });

  factory Distrito.fromJson(Map<String, dynamic> json) => Distrito(
      id: json['id'] as int?,
      name: json['name'] as String?,
      provinciaId: json['provinciaId'] as int?,
      provincia: json['provincia'] != null
          ? Provincia.fromJson(json['provincia'] as Map<String, dynamic>)
          : null,
      users: json['users'] != null
          ? createModels<User>(json['users'], User.fromJson)
          : null,
      $usersCount: json['_count']?['users'] as int?);

  Distrito copyWith({
    int? id,
    String? name,
    int? provinciaId,
    Provincia? provincia,
    List<User>? users,
    int? $usersCount,
  }) {
    return Distrito(
        id: id ?? this.id,
        name: name ?? this.name,
        provinciaId: provinciaId ?? this.provinciaId,
        provincia: provincia ?? this.provincia,
        users: users ?? this.users,
        $usersCount: $usersCount ?? this.$usersCount);
  }

  Distrito copyWithInstance(Distrito distrito) {
    return Distrito(
        id: distrito.id ?? id,
        name: distrito.name ?? name,
        provinciaId: distrito.provinciaId ?? provinciaId,
        provincia: distrito.provincia ?? provincia,
        users: distrito.users ?? users,
        $usersCount: distrito.$usersCount ?? $usersCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (name != null) 'name': name,
        if (provinciaId != null) 'provinciaId': provinciaId,
        if (provincia != null) 'provincia': provincia,
        if (users != null)
          'users': users?.map((item) => item.toJson()).toList(),
        if ($usersCount != null)
          '_count': {
            if ($usersCount != null) 'users': $usersCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Distrito &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          name == other.name &&
          provinciaId == other.provinciaId &&
          provincia == other.provincia &&
          areListsEqual(users, other.users) &&
          $usersCount == other.$usersCount;

  @override
  int get hashCode =>
      id.hashCode ^
      name.hashCode ^
      provinciaId.hashCode ^
      provincia.hashCode ^
      users.hashCode ^
      $usersCount.hashCode;
}
