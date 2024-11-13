import 'package:get/get.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/main.dart';
import 'package:jiron_anime/pages/home/home_page.dart';
import 'package:jiron_anime/shared/dialogs.dart';
import 'package:jiron_anime/shared/user_widgets.dart';
import 'package:jiron_anime/utils/supabase_utils.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class AuthService {
  static bool get isLoggedIn => getSupabaseClient().auth.currentSession != null;

  static Future<void> browserGoogleSignIn() async {
    try {
      await supabase.auth.signInWithOAuth(
        OAuthProvider.google,
        redirectTo: "jironanime://com.example.jiron_anime",
      );
      await CurrentUser.reloadData();
      Get.offAll(() => const HomePage(), predicate: (r) => false);
    } catch (e) {
      Get.dialog(ErrorDialog(message: "Error al iniciar sesión: $e"));
    }
  }

  static Future nativeGoogleSignIn() async {
    try {
      final GoogleSignIn googleSignIn =
          GoogleSignIn(serverClientId: Config.googleServerClientID);
      final googleUser = await googleSignIn.signIn();
      final googleAuth = await googleUser?.authentication;

      if (googleAuth?.accessToken == null || googleAuth?.idToken == null) {
        throw Exception('Google sign-in failed: Missing access or ID token');
      }

      await supabase.auth.signInWithIdToken(
        provider: OAuthProvider.google,
        idToken: googleAuth!.idToken!,
        accessToken: googleAuth.accessToken!,
      );

      Get.offAll(() => const HomePage(), predicate: (r) => false);
    } catch (e) {
      Get.dialog(ErrorDialog(message: "Error al iniciar sesión: $e"));
      rethrow;
    }
  }

  static Future<void> discordSignIn() async {
    try {
      await supabase.auth.signInWithOAuth(
        OAuthProvider.discord,
        redirectTo: "jironanime://com.example.jiron_anime",
      );
      Get.offAll(() => const HomePage(), predicate: (r) => false);
    } catch (e) {
      Get.dialog(ErrorDialog(message: "Error al iniciar sesión: $e"));
    }
  }

  static Future<void> logout() async {
    await supabase.auth.signOut();
    await CurrentUser.reloadData();
    Get.offAll(() => const HomePage(), predicate: (r) => false);
  }

  static void setupAuthListener() {
    final _ = supabase.auth.onAuthStateChange.listen((data) async {
      await CurrentUser.reloadData();
    });
  }
}
