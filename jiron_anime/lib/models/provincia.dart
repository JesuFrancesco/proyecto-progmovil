//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'departmento.dart';
import 'distrito.dart';
import 'user.dart';

class Provincia implements ToJson, Id {
  @override
  int? id;
  String? name;
  int? departmentoId;
  Departmento? departmento;
  List<Distrito>? distritos;
  List<User>? users;
  int? $distritosCount;
  int? $usersCount;

  Provincia({
    this.id,
    this.name,
    this.departmentoId,
    this.departmento,
    this.distritos,
    this.users,
    this.$distritosCount,
    this.$usersCount,
  });

  factory Provincia.fromJson(Map<String, dynamic> json) => Provincia(
      id: json['id'] as int?,
      name: json['name'] as String?,
      departmentoId: json['departmentoId'] as int?,
      departmento: json['departmento'] != null
          ? Departmento.fromJson(json['departmento'] as Map<String, dynamic>)
          : null,
      distritos: json['distritos'] != null
          ? createModels<Distrito>(json['distritos'], Distrito.fromJson)
          : null,
      users: json['users'] != null
          ? createModels<User>(json['users'], User.fromJson)
          : null,
      $distritosCount: json['_count']?['distritos'] as int?,
      $usersCount: json['_count']?['users'] as int?);

  Provincia copyWith({
    int? id,
    String? name,
    int? departmentoId,
    Departmento? departmento,
    List<Distrito>? distritos,
    List<User>? users,
    int? $distritosCount,
    int? $usersCount,
  }) {
    return Provincia(
        id: id ?? this.id,
        name: name ?? this.name,
        departmentoId: departmentoId ?? this.departmentoId,
        departmento: departmento ?? this.departmento,
        distritos: distritos ?? this.distritos,
        users: users ?? this.users,
        $distritosCount: $distritosCount ?? this.$distritosCount,
        $usersCount: $usersCount ?? this.$usersCount);
  }

  Provincia copyWithInstance(Provincia provincia) {
    return Provincia(
        id: provincia.id ?? id,
        name: provincia.name ?? name,
        departmentoId: provincia.departmentoId ?? departmentoId,
        departmento: provincia.departmento ?? departmento,
        distritos: provincia.distritos ?? distritos,
        users: provincia.users ?? users,
        $distritosCount: provincia.$distritosCount ?? $distritosCount,
        $usersCount: provincia.$usersCount ?? $usersCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (name != null) 'name': name,
        if (departmentoId != null) 'departmentoId': departmentoId,
        if (departmento != null) 'departmento': departmento,
        if (distritos != null)
          'distritos': distritos?.map((item) => item.toJson()).toList(),
        if (users != null)
          'users': users?.map((item) => item.toJson()).toList(),
        if ($distritosCount != null || $usersCount != null)
          '_count': {
            if ($distritosCount != null) 'distritos': $distritosCount,
            if ($usersCount != null) 'users': $usersCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Provincia &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          name == other.name &&
          departmentoId == other.departmentoId &&
          departmento == other.departmento &&
          areListsEqual(distritos, other.distritos) &&
          areListsEqual(users, other.users) &&
          $distritosCount == other.$distritosCount &&
          $usersCount == other.$usersCount;

  @override
  int get hashCode =>
      id.hashCode ^
      name.hashCode ^
      departmentoId.hashCode ^
      departmento.hashCode ^
      distritos.hashCode ^
      users.hashCode ^
      $distritosCount.hashCode ^
      $usersCount.hashCode;
}
