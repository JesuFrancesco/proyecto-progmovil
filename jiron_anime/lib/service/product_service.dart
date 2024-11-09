import 'dart:convert';
// import 'package:flutter/services.dart' show rootBundle;
import 'package:get/get.dart';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/models/product.dart';
import 'package:http_status/http_status.dart';
import 'package:http/http.dart' as http;
import 'package:jiron_anime/models/tag.dart';
import 'package:jiron_anime/shared/error_dialog.dart';
import 'package:jiron_anime/utils/query_string.dart';

int _productsPerPage = 30;

class ProductoService {
  Future<List<Product>> fetchAll() async {
    List<Product> mangas = [];

    final queryParams = {
      "include[productAttachments]": true,
      "take": _productsPerPage
    };

    final response = await http.get(Uri.parse(
        "${Config.serverURL}/product?${parseToQueryParams(queryParams)}"));

    if (response.statusCode != 200) {
      throw Error();
    }

    final List<dynamic> data = jsonDecode(response.body);
    mangas = data
        .map((map) => Product.fromJson(map as Map<String, dynamic>))
        .toList();

    return mangas;
  }

  Future<List<Product>> fetchRecent(int page) async {
    List<Product> mangas = [];

    final queryParams = {
      "take": _productsPerPage,
      "skip": (page - 1) * _productsPerPage,
      "include[productAttachments]": true,
      "include[productTags]": true,
      "orderBy[createdAt]": "desc"
    };

    final res = await http.get(Uri.parse(
        "${Config.serverURL}/product?${parseToQueryParams(queryParams)}"));

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(
        message: "Algo salio mal.\n${res.body}",
      ));
    }

    final List<dynamic> data = jsonDecode(res.body);
    mangas = data
        .map((map) => Product.fromJson(map as Map<String, dynamic>))
        .toList();

    return mangas;
  }

  Future<List<Product>> searchProducts(String productName, int page) async {
    List<Product> mangas = [];
    final queryParams = {
      "take": _productsPerPage,
      "skip": (page - 1) * _productsPerPage,
      "where[name][contains]": productName,
      "where[name][mode]": "insensitive",
      "include[productAttachments]": true,
      // "orderBy[createdAt]": "desc"
    };

    final res = await http.get(Uri.parse(
        "${Config.serverURL}/product?${parseToQueryParams(queryParams)}"));

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(
        message: "Algo salio mal.\n${res.body}",
      ));
    }

    final List<dynamic> data = jsonDecode(res.body);
    mangas = data
        .map((map) => Product.fromJson(map as Map<String, dynamic>))
        .toList();

    return mangas;
  }

  Future<List<Product>> fetchProductsByGenre(List<Tag> tags, int page) async {
    List<Product> mangas = [];
    final queryParams = {
      "take": _productsPerPage,
      "skip": (page - 1) * _productsPerPage,
      "where[productTags][some][tag][id]": tags[0].id!,
      "include[productAttachments]": true,
      "orderBy[createdAt]": "desc",
    };

    final res = await http.get(Uri.parse(
        "${Config.serverURL}/product?${parseToQueryParams(queryParams)}"));

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(
        message: "Algo salio mal.\n${res.body}",
      ));
    }

    final List<dynamic> data = jsonDecode(res.body);
    mangas = data
        .map((map) => Product.fromJson(map as Map<String, dynamic>))
        .toList();

    return mangas;
  }
}
