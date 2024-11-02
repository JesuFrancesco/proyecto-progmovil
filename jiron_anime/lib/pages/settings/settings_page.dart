import 'package:flutter/material.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  Widget _buildBody(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: CustomLayout(
        pt: 0,
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
                child: Row(
                  children: [
                    CurrentUser.getClipOvalAvatar(),
                    const SizedBox(width: 10),
                    Text(
                      CurrentUser.fullName ?? 'Anónimo',
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            fontWeight: FontWeight.bold,
                            fontSize: 20,
                          ),
                    ),
                  ],
                ),
              ),
              // Sección de Ajustes
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: Text(
                  'Ajustes',
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                        color: AppColors.primaryColor,
                      ),
                ),
              ),
              _buildSectionTitle('Cuenta', Icons.person),
              _buildListTile('Edita tu perfil', Icons.edit),
              _buildListTile('Cambiar contraseña', Icons.lock),
              _buildListTile('Privacidad', Icons.privacy_tip),
              16.pv,
              // Sección de Notificación
              _buildSectionTitle('Notificación', Icons.notifications),
              _buildSwitchTile('Activar notificaciones', true),
              16.pv,
              // Sección de Otros
              _buildSectionTitle('Otros', Icons.settings),
              _buildSwitchTile('Modo oscuro', false),
              16.pv,
              // Sección de Más
              _buildSectionTitle('Más...', Icons.more_horiz),
              _buildListTile('Sobre nosotros', Icons.info),
              _buildListTile('Política de privacidad', Icons.privacy_tip),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSectionTitle(String title, IconData icon) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Row(
        children: [
          Icon(icon, color: AppColors.primaryColor),
          const SizedBox(width: 10),
          Text(
            title,
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
          ),
        ],
      ),
    );
  }

  Widget _buildListTile(String title, IconData icon) {
    return ListTile(
      leading: Icon(icon, color: Theme.of(context).primaryColor),
      title: Text(title, style: Theme.of(context).textTheme.titleSmall),
      trailing: const Icon(Icons.chevron_right),
      onTap: () {},
    );
  }

  Widget _buildSwitchTile(String title, bool value) {
    return SwitchListTile(
      title: Text(title, style: Theme.of(context).textTheme.titleSmall),
      value: value,
      onChanged: (bool val) {
        val = !val;
      },
      inactiveThumbColor: Colors.white,
      inactiveTrackColor: Colors.grey.shade700,
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Theme.of(context).scaffoldBackgroundColor,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          iconTheme: const IconThemeData(color: Colors.white),
        ),
        body: _buildBody(context),
      ),
    );
  }
}
