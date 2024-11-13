import 'dart:convert';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/models/product_question.dart';
import 'package:http/http.dart' as http;
import 'package:jiron_anime/utils/query_string.dart';

class PreguntaService {
  Future<List<ProductQuestion>> fetchProductQuestions(int productId) async {
    final queryParams = {"where[productId]": productId, ...commonJoins};

    List<ProductQuestion> preguntas = [];

    final response = await http.get(Uri.parse(
        "${Config.serverURL}/productquestion?${parseToQueryParams(queryParams)}"));

    final List<dynamic> data = jsonDecode(response.body);

    preguntas = data
        .map((map) => ProductQuestion.fromJson(map as Map<String, dynamic>))
        .toList();

    return preguntas;
  }
}

final Map<String, Object> commonJoins = {
  "include[client][include][profile]": true
};
