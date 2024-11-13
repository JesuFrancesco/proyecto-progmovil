import 'dart:convert';
import 'package:jiron_anime/config/config.dart';
import 'package:http/http.dart' as http;
import 'package:jiron_anime/models/product_rating.dart';
import 'package:jiron_anime/utils/query_string.dart';

class RatingService {
  Future<List<ProductRating>> fetchProductRatings(int productId) async {
    final queryParams = {"where[productId]": productId, ...commonJoins};

    List<ProductRating> preguntas = [];

    final response = await http.get(Uri.parse(
        "${Config.serverURL}/productrating?${parseToQueryParams(queryParams)}"));

    final List<dynamic> data = jsonDecode(response.body);

    preguntas = data
        .map((map) => ProductRating.fromJson(map as Map<String, dynamic>))
        .toList();

    return preguntas;
  }
}

final Map<String, Object> commonJoins = {
  "include[client][include][profile]": true
};
