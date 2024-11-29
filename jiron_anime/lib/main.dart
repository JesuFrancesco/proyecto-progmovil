import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/middleware/auth/middleware.dart';
import 'package:jiron_anime/pages/create_market/create_market_page.dart';
import 'package:jiron_anime/pages/history_orders/history_orders_page.dart';
import 'package:jiron_anime/pages/home/home_page.dart';
import 'package:jiron_anime/pages/mis_tiendas/mis_tiendas_page.dart';
import 'package:jiron_anime/pages/settings/settings_page.dart';
import 'package:jiron_anime/pages/orders/orders_page.dart';
import 'package:jiron_anime/pages/signin/signin_page.dart';
import 'package:jiron_anime/pages/wishlist/wishlist_page.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/service/locale_notification_service.dart';
import 'package:jiron_anime/theme/theme.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:jiron_anime/pages/shopping_cart/cart_page.dart';
import 'utils/supabase_utils.dart';

// anonymous supabase client
final supabase = Supabase.instance.client;

// local notifications
final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
    FlutterLocalNotificationsPlugin();

// Entrypoint
Future<void> main() async {
  await dotenv.load(fileName: ".env");

  WidgetsFlutterBinding.ensureInitialized();

  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.requestNotificationsPermission();
  await LocaleNotificationService().init();

  initializeSupabase();

  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialRoute: "/home",
      getPages: [
        GetPage(name: "/home", page: () => const HomePage()),
        GetPage(name: "/settings", page: () => const SettingsPage()),
        GetPage(name: "/sign-in", page: () => const SignInPage()),
        // Rutas protegidas
        GetPage(
            name: "/wishlist",
            page: () => const WishlistPage(),
            middlewares: [AuthMiddleware()]),
        GetPage(
            name: "/cart",
            page: () => const ShoppingCartPage(),
            middlewares: [AuthMiddleware()]),
        GetPage(
            name: "/orders",
            page: () => const OrdersPage(),
            middlewares: [AuthMiddleware()]),
        GetPage(
            name: "/orders-history",
            page: () => const HistoryOrdersPage(),
            middlewares: [AuthMiddleware()]),
        GetPage(
            name: "/my-markets",
            page: () => const MisTiendasPage(),
            middlewares: [AuthMiddleware()]),
        GetPage(
            name: "/create-market",
            page: () => const CreateMarketPage(),
            middlewares: [AuthMiddleware()]),
      ],
      theme: appTheme,
      darkTheme: darkAppTheme,
      onReady: AuthService.setupAuthListener,
    );
  }
}
