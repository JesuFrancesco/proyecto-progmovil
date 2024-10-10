import 'package:flutter/material.dart';
import 'package:jiron_anime/shared/usuario_controller.dart'; // Import del controlador de usuario o CurrentUser

class SettingsDemoPage extends StatefulWidget {
  const SettingsDemoPage({super.key});

  @override
  State<SettingsDemoPage> createState() => _SettingsDemoPageState();
}

class _SettingsDemoPageState extends State<SettingsDemoPage> {
  Widget _buildBody(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              children: [
                CurrentUser.getClipOvalAvatar(),
                const SizedBox(width: 10),
                Text(
                  CurrentUser.fullName ?? 'Usuario desconocido',
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
                    color: Colors.blueAccent,
                  ),
            ),
          ),
          _buildSectionTitle('Cuenta', Icons.person),
          _buildListTile('Edita tu perfil', Icons.edit),
          _buildListTile('Cambiar contraseña', Icons.lock),
          _buildListTile('Privacidad', Icons.privacy_tip),
          const SizedBox(height: 16),
          // Sección de Notificación
          _buildSectionTitle('Notificación', Icons.notifications),
          _buildSwitchTile('Activar notificaciones', true),
          _buildSwitchTile('Actualización', false),
          const SizedBox(height: 16),
          // Sección de Otros
          _buildSectionTitle('Otros', Icons.settings),
          _buildSwitchTile('Modo oscuro', false),
          const SizedBox(height: 16),
          // Sección de Más
          _buildSectionTitle('Más...', Icons.more_horiz),
          _buildListTile('Sobre nosotros', Icons.info),
          _buildListTile('Política de privacidad', Icons.privacy_tip),
        ],
      ),
    );
  }

  Widget _buildSectionTitle(String title, IconData icon) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Row(
        children: [
          Icon(icon, color: Colors.blueAccent),
          const SizedBox(width: 10),
          Text(
            title,
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                  color: Colors.blueAccent,
                ),
          ),
        ],
      ),
    );
  }

  Widget _buildListTile(String title, IconData icon) {
    return ListTile(
      leading: Icon(icon, color: Colors.white),
      title: Text(
        title,
        style: const TextStyle(color: Colors.white),
      ),
      trailing: const Icon(Icons.chevron_right, color: Colors.white),
      onTap: () {},
    );
  }

  Widget _buildSwitchTile(String title, bool value) {
    return SwitchListTile(
      title: Text(
        title,
        style: const TextStyle(color: Colors.white),
      ),
      value: value,
      onChanged: (bool val) {},
      activeColor: Colors.white, // Color del interruptor activo
      inactiveThumbColor: Colors.white, // Color del interruptor inactivo
      inactiveTrackColor: Colors.grey.shade700, // Color de la pista inactiva
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
