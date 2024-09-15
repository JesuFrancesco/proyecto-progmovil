import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/LoginPage.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'package:flutter_dotenv/flutter_dotenv.dart';

Future<void> main() async {
  await dotenv.load(fileName: ".env");

  await Supabase.initialize(
      url: dotenv.get("SUPABASE_URL"),
      anonKey: dotenv.get("SUPABASE_ANON_KEY"));
  runApp(const MainApp());
}

final supabase = Supabase.instance.client;

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: const LoginScreen(),
      theme: ThemeData(fontFamily: "Rubik"),
    );
  }
}
