import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:jiron_anime/pages/demo/profile_demo.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:http/http.dart' as http;
import '../../main.dart';
import '../../middleware/supabase_layer.dart';

class SignInScreen extends StatefulWidget {
  const SignInScreen({super.key});

  @override
  State<SignInScreen> createState() => _SignInScreenState();
}

class _SignInScreenState extends State<SignInScreen> {
  @override
  void initState() {
    _setupAuthListener();
    super.initState();
  }

  void _setupAuthListener() {
    supabase.auth.onAuthStateChange.listen((data) async {
      final event = data.event;
      if (event == AuthChangeEvent.signedIn && context.mounted) {
        // await loginSuccessfulCallback(data.session!);

        // XDDD
        await Navigator.of(context.mounted ? context : context).pushReplacement(
          MaterialPageRoute(
            builder: (context) => const ProfileScreen(),
          ),
        );
      }
    });
  }

  Future<void> loginSuccessfulCallback(Session session) async {
    var response =
        await http.post(Uri.parse("${dotenv.get("SERVER_URL")}/accounts"),
            headers: <String, String>{
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: jsonEncode({
              "email": session.user.email,
              "name": session.user.userMetadata!["full_name"],
              "password": session.accessToken,
            }));

    if (response.statusCode != 201 || response.statusCode != 409) {
      throw Exception("algo salio mal");
    }
  }

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                "Jiron Anime",
                style: TextStyle(fontSize: 32, fontFamily: "Rubik"),
              ),
              Image(image: AssetImage("assets/image/logo.png")),
              ElevatedButton(
                onPressed: googleSignIn,
                style: ButtonStyle(
                    backgroundColor:
                        WidgetStatePropertyAll<Color>(Colors.white)),
                child: Text(
                  "Iniciar sesión con Google",
                  style: TextStyle(color: Colors.black),
                ),
              ),
              ElevatedButton(
                  onPressed: discordSignIn,
                  style: ButtonStyle(
                      backgroundColor:
                          WidgetStatePropertyAll<Color>(Color(0xFF5865F2))),
                  child: Text(
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
