import 'package:flutter/material.dart';

import '../../../main.dart';

Widget _buildMenuItem(
    BuildContext context, IconData icon, String text, VoidCallback? fnOnTap) {
  return InkWell(
    onTap: fnOnTap,
    child: Padding(
      padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 16),
      child: Row(
        children: [
          Icon(icon, size: 24),
          const SizedBox(width: 16),
          Expanded(
            child: Text(
              text,
              style: Theme.of(context).textTheme.titleMedium,
            ),
          ),
          const Icon(Icons.chevron_right, size: 24),
        ],
      ),
    ),
  );
}

Widget settingsContainer(BuildContext context) {
  final user = supabase.auth.currentUser;
  final profileImageUrl = user?.userMetadata?['avatar_url'];
  final fullName = user?.userMetadata?['full_name'];
  final provider = user?.appMetadata['provider'];

  return Padding(
    padding: const EdgeInsets.symmetric(vertical: 24),
    child: Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          ClipOval(
            child: profileImageUrl != null
                ? Image.network(
                    profileImageUrl,
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
            fullName ?? 'No hay sesión',
            style: Theme.of(context).textTheme.headlineSmall,
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 4),
          Text(
            provider ?? '',
            style: Theme.of(context).textTheme.bodyMedium,
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 24),
          const SizedBox(height: 16),
          _buildMenuItem(context, Icons.favorite, 'Lista de deseados', () {}),
          _buildMenuItem(context, Icons.payment, 'Métodos de pago', () {}),
          _buildMenuItem(context, Icons.share, 'Comparte la aplicación', () {}),
          _buildMenuItem(context, Icons.notifications, 'Notificaciones', () {}),
          _buildMenuItem(context, Icons.settings, 'Más ajustes', () {}),
          const Spacer(),
          _buildMenuItem(context, Icons.logout, 'Cerrar sesión', () async {
            await supabase.auth.signOut();
            Navigator.of(context.mounted ? context : context)
                .pushNamed("/sign-in");
          }),
        ],
      ),
    ),
  );
}
