import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import '../models/account.dart';

class StaticAccountsService {
  Future<List<Account>> fetchAll() async {
    List<Account> secciones = [];
    final String response =
        await rootBundle.loadString('static/cuentas_sintetica.json');

    final List<dynamic> data = jsonDecode(response);
    secciones = data
        .map((map) => Account.fromJson(map as Map<String, dynamic>))
        .toList();

    return secciones;
  }
}
