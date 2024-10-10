import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/home/home_page.dart';
import 'package:jiron_anime/pages/signin/signin_page.dart';
import 'package:jiron_anime/pages/demo/profile_demo.dart';
import 'package:jiron_anime/pages/reset/reset_page.dart';
import 'package:jiron_anime/theme/theme.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:jiron_anime/pages/shopping_cart/cart_page.dart';

import 'middleware/supabase_layer.dart';

Future<void> main() async {
  await dotenv.load(fileName: ".env");

  initializeSupabase();

  runApp(const MainApp());
}

final supabase = Supabase.instance.client;

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // initialRoute: supabase.auth.currentSession == null ? "/sign-in" : "/demo",
      initialRoute: "/home",
      routes: {
        '/sign-in': (context) => const SignInPage(),
        // '/sign-up': (context) => SignUpPage(), // puede q no se necesite
        '/demo': (context) => const ProfileScreen(),
        '/cart': (context) => const ShoppingCartPage(),
        // no implementados
        '/home': (context) => const HomePage(),
        '/reset': (context) => const ResetPage(),
      },
      theme: appTheme,
      darkTheme: darkAppTheme,
    );
  }
}
