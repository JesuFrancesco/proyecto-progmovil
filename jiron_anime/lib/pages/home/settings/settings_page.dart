import 'package:flutter/material.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/pages/home/settings/widgets/menu_item.dart';
import 'package:jiron_anime/utils/extensions.dart';
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
            CurrentUser.getClipOvalPFP(),
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
            NotificationItem(
                context: context,
                icon: Icons.shopping_cart,
                text: 'Carrito de compras',
                fnOnTap: () {}),
            NotificationItem(
                context: context,
                icon: Icons.favorite,
                text: 'Lista de deseados',
                fnOnTap: () {}),
            NotificationItem(
                context: context,
                icon: Icons.history,
                text: 'Historial de órdenes',
                fnOnTap: () {}),
            // NotificationItem(
            //     context: context,
            //     icon: Icons.payment,
            //     text: 'Métodos de pago',
            //     fnOnTap: () {}),
            NotificationItem(
                context: context,
                icon: Icons.notifications,
                text: 'Ajustes de notificaciones',
                fnOnTap: () {}),
            NotificationItem(
                context: context,
                icon: Icons.settings,
                text: 'Más ajustes',
                fnOnTap: () {}),
            const Spacer(),
            NotificationItem(
                context: context,
                icon: Icons.logout,
                text: 'Cerrar sesión',
                fnOnTap: () async {
                  await supabase.auth.signOut();
                  Navigator.of(context.mounted ? context : context)
                      .pushNamed("/sign-in");
                }),
          ],
        ),
      ),
    );
  }
}