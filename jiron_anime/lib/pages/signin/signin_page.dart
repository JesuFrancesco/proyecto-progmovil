import 'package:flutter/material.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/shared/custom_layout.dart';

class SignInPage extends StatefulWidget {
  const SignInPage({super.key});

  @override
  State<SignInPage> createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
  @override
  Widget build(BuildContext context) {
    return CustomLayout(
      child: Center(
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
              onPressed: AuthService.browserGoogleSignIn,
              style: ButtonStyle(
                  backgroundColor: WidgetStatePropertyAll<Color>(Colors.white)),
              child: Text(
                "Iniciar sesión con Google",
                style: TextStyle(color: Colors.black),
              ),
            ),
            const ElevatedButton(
                onPressed: AuthService.discordSignIn,
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
