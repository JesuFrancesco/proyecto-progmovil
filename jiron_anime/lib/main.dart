import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/history_orders/history_orders.dart';
import 'package:jiron_anime/pages/home/home_page.dart';
import 'package:jiron_anime/pages/orders/orders_page.dart';
import 'package:jiron_anime/pages/signin/signin_page.dart';
import 'package:jiron_anime/pages/demo/profile_demo.dart';
import 'package:jiron_anime/pages/reset/reset_page.dart';
import 'package:jiron_anime/pages/wishlist/wishlist_page.dart';
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
<<<<<<< HEAD
        // '/sign-up': (context) => SignUpPage(), // puede q no se necesite
        '/demo': (context) => const ProfileScreen(),
        '/cart': (context) => const ShoppingCartPage(),
        '/settings': (context) => const ShoppingCartPage(),
        // no implementados
        '/home': (context) => const HomePage(),
=======
        // '/sign-up': (context) => SignUpPage(), // por ahora manejado por supabase
>>>>>>> 7cd7ec7a7201510222d46a1d1c82d280c6ec9d1f
        '/reset': (context) => const ResetPage(),
        '/home': (context) => const HomePage(),
        '/cart': (context) => const ShoppingCartPage(),
        '/orders': (context) => const OrdersPage(),
        '/wishlist': (context) => const WishlistPage(),
        '/orders-history': (context) => const HistoryOrdersPage(),
        // sb demo
        '/demo': (context) => const ProfileScreen(),
      },
      theme: appTheme,
      darkTheme: darkAppTheme,
    );
  }
}
