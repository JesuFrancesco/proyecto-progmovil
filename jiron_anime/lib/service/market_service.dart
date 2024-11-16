import 'dart:convert';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:http_status/http_status.dart';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/shared/dialogs.dart';
import 'package:jiron_anime/utils/query_string.dart';
import 'package:jiron_anime/utils/supabase_utils.dart';
import 'package:jiron_anime/models/market.dart';

class MarketService {
  Future<List<Market>> fetchMyMarkets() async {
    List<Market> markets = [];

    final queryParams = {
      "where[profileId]": AuthService.getProfileId(),
      "include[products]": true,
    };

    final res = await http.get(
      Uri.parse(
        "${Config.serverURL}/market?${parseToQueryParams(queryParams)}",
      ),
      headers: getSupabaseAuthHeaders(),
    );

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salió mal.\n${res.body}"));
    }

    final List<dynamic> data = jsonDecode(res.body);
    markets = data
        .map((map) => Market.fromJson(map as Map<String, dynamic>))
        .toList();

    return markets;
  }

  Future<Market> createNewMarket(Market mercado) async {
    final res = await http.post(
      Uri.parse(
        "${Config.serverURL}/market",
      ),
      body: json.encode({
        "data": {
          "name": mercado.name!,
          "contactEmail": mercado.contactEmail,
          "contactPhone": mercado.contactPhone,
          "logoUrl": mercado.logoUrl,
          "profileId": mercado.profileId
        }
      }),
      headers: {
        "Content-Type": "application/json",
        ...getSupabaseAuthHeaders()
      },
    );

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salió mal.\n${res.body}"));
    }

    final dynamic data = jsonDecode(res.body);

    return Market.fromJson(data);
  }

  Future<Market> createNewProduct(Product producto, int marketId) async {
    final res = await http.put(
      Uri.parse(
        "${Config.serverURL}/market",
      ),
      body: json.encode({
        "where": {"id": marketId},
        "data": {
          "products": {
            "create": {
              "name": producto.name,
              "price": producto.price,
              "stock": producto.stock,
              if (producto.dimensions != null)
                "dimensions": producto.dimensions!,
              if (producto.warranty != null) "warranty": producto.warranty!,
              if (producto.productTags != null)
                "productTags": {
                  "create": producto.productTags!
                      .map((e) => e.tag!)
                      .map(
                        (e) => ({
                          "tag": {
                            "connectOrCreate": {
                              "where": {
                                "name": e.name,
                              },
                              "create": {
                                "name": e.name,
                              },
                            },
                          },
                        }),
                      )
                      .toList()
                },
              if (producto.productAttachments != null)
                "productAttachments": {
                  "create": producto.productAttachments!
                      .map((e) => ({"imageUrl": e.imageUrl}))
                      .toList()
                }
            }
          }
        }
      }),
      headers: {
        "Content-Type": "application/json",
        ...getSupabaseAuthHeaders()
      },
    );

    if (!res.statusCode.isSuccessfulHttpStatusCode) {
      Get.dialog(ErrorDialog(message: "Algo salió mal.\n${res.body}"));
    }

    final dynamic data = jsonDecode(res.body);

    return Market.fromJson(data);
  }
}
