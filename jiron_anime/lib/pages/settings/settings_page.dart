import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/shared/dialogs.dart';
import 'package:jiron_anime/shared/user_widgets.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  bool _notificationsEnabled = false;
  bool _darkModeEnabled = false;

  @override
  void initState() {
    super.initState();
    _loadPreferences();
  }

  void _updateNotifications(bool value) async {
    final prefs = await SharedPreferences.getInstance();
    prefs.setBool('notificationsEnabled', value);
    setState(() {
      _notificationsEnabled = value;
    });
  }

  void _updateDarkMode(bool value) async {
    final prefs = await SharedPreferences.getInstance();
    prefs.setBool('darkModeEnabled', value);
    setState(() {
      _darkModeEnabled = value;
    });
  }

  void _loadPreferences() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _notificationsEnabled = prefs.getBool('notificationsEnabled') ?? false;
      _darkModeEnabled = prefs.getBool('darkModeEnabled') ?? false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const CustomAppbar(
                showAvatar: false,
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 8, vertical: 16),
                child: Row(
                  children: [
                    CurrentUser.getClipOvalAvatar(),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        CurrentUser.fullName != null
                            ? CurrentUser.fullName!
                            : 'Anónimo',
                        style: Theme.of(context).textTheme.titleLarge,
                        overflow: TextOverflow.ellipsis,
                        softWrap: true,
                        maxLines: 2,
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
              _buildListTile('Edita tu perfil', Icons.edit,
                  () => Get.to(() => const TiendaPage())),
              _buildListTile('Cambiar contraseña', Icons.lock, () {}),
              _buildListTile(
                  'Privacidad',
                  Icons.privacy_tip,
                  () => Get.dialog(
                      const InfoDialog(title: "Privacidad", message: "no se"))),
              16.pv,
              // Sección de Notificación
              _buildSectionTitle('Notificación', Icons.notifications),
              _buildSwitchTile('Activar notificaciones', _notificationsEnabled,
                  _updateNotifications),
              16.pv,
              // Sección de Otros
              _buildSectionTitle('Otros', Icons.settings),
              _buildSwitchTile(
                  'Modo oscuro', _darkModeEnabled, _updateDarkMode),
              16.pv,
              // Sección de Más
              _buildSectionTitle('Más', Icons.more_horiz),
              _buildListTile(
                  'Sobre nosotros',
                  Icons.info,
                  () => Get.dialog(const InfoDialog(
                      title: "Sobre nosotros", message: "😭😭😭😭"))),
              _buildListTile(
                  'Política de privacidad',
                  Icons.privacy_tip,
                  () => Get.dialog(const InfoDialog(
                      title: "Política de privacidad", message: "🥶🥶🥶🥶"))),
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

  Widget _buildListTile(String title, IconData icon, GestureTapCallback onTap) {
    return ListTile(
      leading: Icon(icon, color: AppColors.primaryColor),
      title: Text(title, style: Theme.of(context).textTheme.titleSmall),
      trailing: const Icon(Icons.chevron_right),
      onTap: onTap,
    );
  }

  Widget _buildSwitchTile(
      String title, bool value, ValueChanged<bool> onChanged) {
    return SwitchListTile(
      title: Text(title, style: Theme.of(context).textTheme.titleSmall),
      value: value,
      onChanged: onChanged,
      inactiveThumbColor: Colors.white,
      inactiveTrackColor: Colors.grey.shade700,
    );
  }
}
