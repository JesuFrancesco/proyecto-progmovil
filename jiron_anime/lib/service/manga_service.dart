import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import 'package:jiron_anime/models/product.dart';

class StaticMangaService {
  Future<List<Product>> fetchAll() async {
    List<Product> mangas = [];
    final String response =
        await rootBundle.loadString('static/mangas.json');

    final List<dynamic> data = jsonDecode(response);
    mangas = data
        .map((map) => Product.fromJson(map as Map<String, dynamic>))
        .toList();

    return mangas;
  }
}
