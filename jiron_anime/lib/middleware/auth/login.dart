import 'package:google_sign_in/google_sign_in.dart';
import 'package:jiron_anime/config/config.dart';
import 'package:jiron_anime/utils/supabase_utils.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> browserGoogleSignIn() async {
  await getSupabaseClient().auth.signInWithOAuth(OAuthProvider.google,
      redirectTo: "jironanime://com.example.jiron_anime");
}

Future<AuthResponse> nativeGoogleSignIn() async {
  final GoogleSignIn googleSignIn =
      GoogleSignIn(serverClientId: Config.googleServerClientID);
  final googleUser = await googleSignIn.signIn();
  final googleAuth = await googleUser!.authentication;
  final accessToken = googleAuth.accessToken;
  final idToken = googleAuth.idToken;

  if (accessToken == null) {
    throw 'No Access Token found.';
  }
  if (idToken == null) {
    throw 'No ID Token found.';
  }

  return getSupabaseClient().auth.signInWithIdToken(
        provider: OAuthProvider.google,
        idToken: idToken,
        accessToken: accessToken,
      );
}

void discordSignIn() {
  getSupabaseClient().auth.signInWithOAuth(OAuthProvider.discord,
      redirectTo: "jironanime://com.example.jiron_anime");
}