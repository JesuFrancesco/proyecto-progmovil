import 'dart:convert';
// import 'package:flutter/services.dart' show rootBundle;
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:http/http.dart' as http;

class TagService {
  Future<List<Tag>> fetchAll() async {
    List<Tag> tags = [];

    final response = await http.get(Uri.parse("${Config.serverURL}/tag"));
    // await rootBundle.loadString('static/tags_sintetica.json');

    if (response.statusCode != 200) {
      throw Error();
    }

    final List<dynamic> data = jsonDecode(response.body);

    tags =
        data.map((map) => Tag.fromJson(map as Map<String, dynamic>)).toList();

    return tags;
  }
}
