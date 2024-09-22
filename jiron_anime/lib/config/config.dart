import 'package:flutter_dotenv/flutter_dotenv.dart';

class Config {
  static final SUPABASE_URL = dotenv.get("SUPABASE_URL");
  static final SUPABASE_ANON_KEY = dotenv.get("SUPABASE_ANON_KEY");
  static final GOOGLE_SERVER_CLIENT_ID = dotenv.get("GOOGLE_SERVER_CLIENT_ID");
  static final SERVER_URL = dotenv.get("SERVER_URL");
}
