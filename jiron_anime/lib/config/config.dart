import 'package:flutter_dotenv/flutter_dotenv.dart';

class Config {
  static final supabaseURL = dotenv.get("SUPABASE_URL");
  static final supabaseAnonKey = dotenv.get("SUPABASE_ANON_KEY");
  static final googleServerClientID = dotenv.get("GOOGLE_SERVER_CLIENT_ID");
  static final serverURL = dotenv.get("SERVER_URL");
}
