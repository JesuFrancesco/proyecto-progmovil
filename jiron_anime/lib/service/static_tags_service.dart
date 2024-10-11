import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import 'package:jiron_anime/models/models_library.dart';

class StaticTagsService {
  Future<List<Tag>> fetchAll() async {
    List<Tag> tags = [];

    final String response =
        await rootBundle.loadString('static/tags_sintetica.json');

    final List<dynamic> data = jsonDecode(response);

    tags =
        data.map((map) => Tag.fromJson(map as Map<String, dynamic>)).toList();

    return tags;
  }
}
