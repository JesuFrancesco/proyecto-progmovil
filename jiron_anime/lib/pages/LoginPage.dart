import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:jiron_anime/pages/ProfileDemo.dart';
import 'package:supabase_auth_ui/supabase_auth_ui.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../main.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  void initState() {
    _setupAuthListener();
    super.initState();
  }

  void _setupAuthListener() {
    supabase.auth.onAuthStateChange.listen((data) {
      final event = data.event;
      if (event == AuthChangeEvent.signedIn) {
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(
            builder: (context) => const ProfileScreen(),
          ),
        );
      }
    });
  }

  Future<AuthResponse> googleSignIn() async {
    final GoogleSignIn googleSignIn =
        GoogleSignIn(serverClientId: dotenv.get("GOOGLE_SERVER_CLIENT_ID"));
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

    return supabase.auth.signInWithIdToken(
      provider: OAuthProvider.google,
      idToken: idToken,
      accessToken: accessToken,
    );
  }

  Future<void> discordSignIn() async {
    await supabase.auth.signInWithOAuth(OAuthProvider.discord,
        redirectTo: "jironanime://com.example.jiron_anime");
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            children: [
              const Padding(
                padding: EdgeInsets.all(16.0),
                child: Text(
                  "Jiron Anime !!",
                  style: TextStyle(fontSize: 32, fontFamily: "Rubik"),
                ),
              ),
              const Image(image: AssetImage("assets/image/logo.png")),
              ElevatedButton(
                onPressed: googleSignIn,
                style: const ButtonStyle(
                    backgroundColor:
                        WidgetStatePropertyAll<Color>(Colors.white)),
                child: const Text(
                  "Iniciar sesión con Google",
                  style: TextStyle(color: Colors.black),
                ),
              ),
              ElevatedButton(
                  onPressed: discordSignIn,
                  style: const ButtonStyle(
                      backgroundColor:
                          WidgetStatePropertyAll<Color>(Color(0xFF5865F2))),
                  child: const Text(
                    "Iniciar sesión con Discord",
                    style: TextStyle(color: Colors.white),
                  )),
            ],
          ),
        ),
      ),
    );
  }
}
