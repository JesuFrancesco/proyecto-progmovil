import 'dart:convert';
// import 'package:flutter/services.dart' show rootBundle;
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/models/product.dart';
import 'package:http/http.dart' as http;

int _productsPerPage = 30;

class StaticProductoService {
  Future<List<Product>> fetchAll() async {
    List<Product> mangas = [];
    final response = await http.get(Uri.parse(
        "${Config.serverURL}/product?include[productAttachments]&take=$_productsPerPage"));

    if (response.statusCode != 200) {
      throw Error();
    }

    final List<dynamic> data = jsonDecode(response.body);
    mangas = data
        .map((map) => Product.fromJson(map as Map<String, dynamic>))
        .toList();

    return mangas;
  }

  Future<List<Product>> searchProducts(String productName, int page) async {
    List<Product> mangas = [];
    final response = await http.get(Uri.parse(
        "${Config.serverURL}/product?where[name][contains]=$productName&where[name][mode]=insensitive&include[productAttachments]&take=$_productsPerPage&skip=${(page - 1) * _productsPerPage}"));

    if (response.statusCode != 200) {
      throw Error();
    }

    final List<dynamic> data = jsonDecode(response.body);
    mangas = data
        .map((map) => Product.fromJson(map as Map<String, dynamic>))
        .toList();

    return mangas;
  }
}
