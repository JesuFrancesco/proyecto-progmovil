import 'dart:convert';
// import 'package:flutter/services.dart' show rootBundle;
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/middleware/supabase_layer.dart';

import '../models/account.dart';
import 'package:http/http.dart' as http;

class AccountService {
  Future<List<Account>> fetchAll() async {
    List<Account> secciones = [];
    final response = await http.get(
        Uri.parse(
            "${Config.serverURL}/client/unique?where[id]=${getClientId()}"),
        headers: getSupabaseAuthHeaders());
    // await rootBundle.loadString('static/cuentas_sintetica.json');

    final List<dynamic> data = jsonDecode(response.body);
    secciones = data
        .map((map) => Account.fromJson(map as Map<String, dynamic>))
        .toList();

    return secciones;
  }
}
