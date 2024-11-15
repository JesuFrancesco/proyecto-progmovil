import 'dart:convert';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:http_status/http_status.dart';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/shared/dialogs.dart';
import 'package:jiron_anime/utils/query_string.dart';
import 'package:jiron_anime/utils/supabase_utils.dart';
import 'package:jiron_anime/models/market.dart';

class MarketService {
  // Método para obtener los mercados asociados al profileId
  Future<List<Market>> fetchMyMarkets() async {
    List<Market> markets = [];
    
    // Definir los parámetros de la consulta
    final queryParams = {
      "where[profileId]": "be7ba0aa-3c6b-48ae-8390-e200eb0aed0b", // Coloca aquí el profileId que quieres filtrar
      "include[products]": true, // Puedes agregar joins si es necesario
    };

    // Realiza la solicitud HTTP
    final res = await http.get(
      Uri.parse(
        "${Config.serverURL}/market?${parseToQueryParams(queryParams)}",
      ),
      headers: getSupabaseAuthHeaders(),
    );

    // Verifica si la respuesta es exitosa
    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salió mal.\n${res.body}"));
    }

    // Si la respuesta fue exitosa, mapea los datos a la lista de mercados
    final List<dynamic> data = jsonDecode(res.body);
    markets = data.map((map) => Market.fromJson(map as Map<String, dynamic>)).toList();

    return markets;
  }
}
