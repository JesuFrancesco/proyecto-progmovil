//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'provincia.dart';
import 'distrito.dart';
import 'user.dart';

class Departamento implements ToJson, Id {
  @override
  int? id;
  String? name;
  List<Provincia>? provincias;
  List<Distrito>? distritos;
  List<User>? users;
  int? $provinciasCount;
  int? $distritosCount;
  int? $usersCount;

  Departamento({
    this.id,
    this.name,
    this.provincias,
    this.distritos,
    this.users,
    this.$provinciasCount,
    this.$distritosCount,
    this.$usersCount,
  });

  factory Departamento.fromJson(Map<String, dynamic> json) => Departamento(
      id: json['id'] as int?,
      name: json['name'] as String?,
      provincias: json['provincias'] != null
          ? createModels<Provincia>(json['provincias'], Provincia.fromJson)
          : null,
      distritos: json['distritos'] != null
          ? createModels<Distrito>(json['distritos'], Distrito.fromJson)
          : null,
      users: json['users'] != null
          ? createModels<User>(json['users'], User.fromJson)
          : null,
      $provinciasCount: json['_count']?['provincias'] as int?,
      $distritosCount: json['_count']?['distritos'] as int?,
      $usersCount: json['_count']?['users'] as int?);

  Departamento copyWith({
    int? id,
    String? name,
    List<Provincia>? provincias,
    List<Distrito>? distritos,
    List<User>? users,
    int? $provinciasCount,
    int? $distritosCount,
    int? $usersCount,
  }) {
    return Departamento(
        id: id ?? this.id,
        name: name ?? this.name,
        provincias: provincias ?? this.provincias,
        distritos: distritos ?? this.distritos,
        users: users ?? this.users,
        $provinciasCount: $provinciasCount ?? this.$provinciasCount,
        $distritosCount: $distritosCount ?? this.$distritosCount,
        $usersCount: $usersCount ?? this.$usersCount);
  }

  Departamento copyWithInstance(Departamento departamento) {
    return Departamento(
        id: departamento.id ?? id,
        name: departamento.name ?? name,
        provincias: departamento.provincias ?? provincias,
        distritos: departamento.distritos ?? distritos,
        users: departamento.users ?? users,
        $provinciasCount: departamento.$provinciasCount ?? $provinciasCount,
        $distritosCount: departamento.$distritosCount ?? $distritosCount,
        $usersCount: departamento.$usersCount ?? $usersCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (name != null) 'name': name,
        if (provincias != null)
          'provincias': provincias?.map((item) => item.toJson()).toList(),
        if (distritos != null)
          'distritos': distritos?.map((item) => item.toJson()).toList(),
        if (users != null)
          'users': users?.map((item) => item.toJson()).toList(),
        if ($provinciasCount != null ||
            $distritosCount != null ||
            $usersCount != null)
          '_count': {
            if ($provinciasCount != null) 'provincias': $provinciasCount,
            if ($distritosCount != null) 'distritos': $distritosCount,
            if ($usersCount != null) 'users': $usersCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Departamento &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          name == other.name &&
          areListsEqual(provincias, other.provincias) &&
          areListsEqual(distritos, other.distritos) &&
          areListsEqual(users, other.users) &&
          $provinciasCount == other.$provinciasCount &&
          $distritosCount == other.$distritosCount &&
          $usersCount == other.$usersCount;

  @override
  int get hashCode =>
      id.hashCode ^
      name.hashCode ^
      provincias.hashCode ^
      distritos.hashCode ^
      users.hashCode ^
      $provinciasCount.hashCode ^
      $distritosCount.hashCode ^
      $usersCount.hashCode;
}
