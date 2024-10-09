import 'package:flutter/material.dart';
import 'package:jiron_anime/middleware/usuario_controller.dart';
import 'package:jiron_anime/pages/home/settings/widgets/menu_item.dart';
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
            ClipOval(
              child: CurrentUser.profileImageUrl != null
                  ? Image.network(
                      CurrentUser.profileImageUrl!,
                      width: 100,
                      height: 100,
                      fit: BoxFit.cover,
                    )
                  : Container(
                      width: 100,
                      height: 100,
                      color: Colors.grey[300],
                      child:
                          Icon(Icons.person, size: 60, color: Colors.grey[600]),
                    ),
            ),
            const SizedBox(height: 16),
            Text(
              CurrentUser.fullName ?? 'No hay sesión',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 4),
            Text(
              CurrentUser.provider ?? '',
              style: Theme.of(context).textTheme.bodyMedium,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 24),
            const SizedBox(height: 16),
            NotificationItem(
                context: context,
                icon: Icons.favorite,
                text: 'Lista de deseados',
                fnOnTap: () {}),
            NotificationItem(
                context: context,
                icon: Icons.payment,
                text: 'Métodos de pago',
                fnOnTap: () {}),
            NotificationItem(
                context: context,
                icon: Icons.share,
                text: 'Comparte la aplicación',
                fnOnTap: () {}),
            NotificationItem(
                context: context,
                icon: Icons.notifications,
                text: 'Notificaciones',
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
