import 'dart:convert';
// import 'package:flutter/services.dart' show rootBundle;
import 'package:get/get.dart';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:http/http.dart' as http;
import 'package:jiron_anime/shared/dialogs.dart';
import 'package:jiron_anime/utils/query_string.dart';

class TagService {
  Future<List<Tag>> fetchAll() async {
    final queryParams = {"orderBy[name]": "asc"};

    List<Tag> tags = [];

    final res = await http.get(Uri.parse(
        "${Config.serverURL}/tag?${parseToQueryParams(queryParams)}"));

    if (res.statusCode != 200) {
      Get.dialog(ErrorDialog(message: "Algo salio mal\n ${res.body}"));
    }

    final List<dynamic> data = jsonDecode(res.body);

    tags =
        data.map((map) => Tag.fromJson(map as Map<String, dynamic>)).toList();

    return tags;
  }
}
