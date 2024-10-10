import 'package:flutter/material.dart';
<<<<<<< HEAD
import 'package:get/get.dart';
import 'package:jiron_anime/pages/orders/orders.dart';
=======
import 'package:jiron_anime/pages/orders/orders_page.dart';
>>>>>>> 7cd7ec7a7201510222d46a1d1c82d280c6ec9d1f
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/pages/home/perfil/widgets/menu_item.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'settings_demo.dart';
import '../../../main.dart';

class SettingsPage extends StatelessWidget {
  final BuildContext context;
  const SettingsPage({super.key, required this.context});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 24),
      child: Scaffold(
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            CurrentUser.getClipOvalAvatar(),
            Text(
              CurrentUser.fullName ?? 'No hay sesión',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            12.pv,
            Text(
              CurrentUser.provider ?? '',
              style: Theme.of(context).textTheme.bodyMedium,
              textAlign: TextAlign.center,
            ),
            12.pv,
            IconMenuItem(
                context: context,
                icon: Icons.shopping_cart,
                text: 'Carrito de compras',
                fnOnTap: () {}),
            IconMenuItem(
                context: context,
                icon: Icons.favorite,
                text: 'Lista de deseados',
                fnOnTap: () {}),
            IconMenuItem(
                context: context,
                icon: Icons.history,
                text: 'Historial de órdenes',
                fnOnTap: () {
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const OrdersPage()),
                  );
                }),
            // NotificationItem(
            //     context: context,
            //     icon: Icons.payment,
            //     text: 'Métodos de pago',
            //     fnOnTap: () {}),
            IconMenuItem(
                context: context,
                icon: Icons.notifications,
                text: 'Ajustes de notificaciones',
                fnOnTap: () {}),
            IconMenuItem(
                context: context,
                icon: Icons.settings,
                text: 'Más ajustes',
                fnOnTap: () {
                  Navigator.push(
                    context, 
                    MaterialPageRoute(builder: (context) => const SettingsDemoPage())
                    );
                }),
            const Spacer(),
            IconMenuItem(
                context: context,
                icon: (supabase.auth.currentSession != null)
                    ? Icons.logout
                    : Icons.login,
                text: (supabase.auth.currentSession != null)
                    ? 'Cerrar Sesión'
                    : "Iniciar Sesión",
                fnOnTap: () async {
                  await supabase.auth.signOut();
                  Navigator.of(context.mounted ? context : context)
                      .popAndPushNamed("/sign-in");
                })
          ],
        ),
      ),
    );
  }
}
