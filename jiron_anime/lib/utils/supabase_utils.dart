import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> initializeSupabase() async {
  await Supabase.initialize(
      url: dotenv.get("SUPABASE_URL"),
      anonKey: dotenv.get("SUPABASE_ANON_KEY"));
}

SupabaseClient getSupabaseClient() {
  return Supabase.instance.client;
}

Map<String, String> getSupabaseAuthHeaders() {
  final session = getSupabaseClient().auth.currentSession;

  final token = session?.accessToken;
  final refreshToken = session?.refreshToken;

  return {
    'Authorization': 'Bearer $token',
    'RefreshToken': '$refreshToken',
  };
}

int getClientId() =>
    getSupabaseClient().auth.currentUser!.userMetadata!["client_id"];

int getShoppingCartId() =>
    getSupabaseClient().auth.currentUser!.userMetadata!["cart_id"];

int getWishlistId() =>
    getSupabaseClient().auth.currentUser!.userMetadata!["wishlist_id"];
