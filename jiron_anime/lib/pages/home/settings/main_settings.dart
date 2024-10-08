import 'package:flutter/material.dart';

import '../../../main.dart';

Widget _buildMenuItem(BuildContext context, IconData icon, String text) {
  return InkWell(
    onTap: () {
      print("test");
    },
    child: Padding(
      padding: const EdgeInsets.all(16),
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

  return Scaffold(
    body: Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (profileImageUrl != null)
          ClipOval(
            child: Image.network(
              profileImageUrl,
              width: 100,
              height: 100,
              fit: BoxFit.cover,
            ),
          ),
        Text(
          fullName ?? 'No hay sesión',
          style: Theme.of(context).textTheme.titleMedium,
        ),
        const SizedBox(height: 16),
        _buildMenuItem(context, Icons.favorite, 'Tus favoritos'),
        _buildMenuItem(context, Icons.payment, 'Métodos de pago'),
        _buildMenuItem(context, Icons.share, 'Comparte con tus contactos'),
        _buildMenuItem(context, Icons.notifications, 'Notificaciones'),
        _buildMenuItem(context, Icons.settings, 'Más ajustes'),
        const Spacer(),
        _buildMenuItem(context, Icons.logout, 'Cerrar sesión'),
        const SizedBox(height: 16),
      ],
    ),
  );
}
