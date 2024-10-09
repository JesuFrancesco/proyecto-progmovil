import 'package:jiron_anime/main.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class CurrentUser {
  static User? user = supabase.auth.currentUser;
  static String? profileImageUrl = user?.userMetadata?['avatar_url'];
  static String? fullName = user?.userMetadata?['full_name'];
  static String? provider = user?.appMetadata['provider'];
}
