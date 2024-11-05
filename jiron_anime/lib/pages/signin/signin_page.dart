import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:jiron_anime/middleware/supabase/login.dart';
import 'package:jiron_anime/pages/home/home_page.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:http/http.dart' as http;
import '../../main.dart';

class SignInPage extends StatefulWidget {
  const SignInPage({super.key});

  @override
  State<SignInPage> createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
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

        await CurrentUser.reloadData();

        await Navigator.of(context.mounted ? context : context).pushReplacement(
          MaterialPageRoute(
            builder: (context) => const HomePage(),
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
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              "Jiron Anime",
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const Image(image: AssetImage("assets/image/logo.png")),
            const ElevatedButton(
              onPressed: browserGoogleSignIn,
              style: ButtonStyle(
                  backgroundColor: WidgetStatePropertyAll<Color>(Colors.white)),
              child: Text(
                "Iniciar sesión con Google",
                style: TextStyle(color: Colors.black),
              ),
            ),
            const ElevatedButton(
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
    );
  }
}
