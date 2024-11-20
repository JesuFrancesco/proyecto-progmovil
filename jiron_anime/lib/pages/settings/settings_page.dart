import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/shared/auth_controller.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

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

  Future<void> launchBrowserPage(String url) async {
    final uri = Uri.parse(url);
    await launchUrl(uri);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: CustomScrollView(
          slivers: [
            SliverFillRemaining(
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
                        AuthController.getClipOvalAvatar(),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Text(
                            AuthController.fullName != null
                                ? AuthController.fullName!
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
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0),
                    child: Text(
                      'Ajustes',
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            color: AppColors.primaryColor,
                          ),
                    ),
                  ),
                  buildSectionTitle('Cuenta', Icons.person),
                  buildListTile(
                      'Edita tu perfil',
                      Icons.edit,
                      () => Get.snackbar(
                            "WIP",
                            "Nada que hacerle",
                            snackPosition: SnackPosition.BOTTOM,
                            duration: const Duration(seconds: 10),
                          )),
                  buildListTile(
                      'Cambiar contraseña',
                      Icons.lock,
                      () => Get.snackbar(
                            "WIP",
                            "Nada que hacerle",
                            snackPosition: SnackPosition.BOTTOM,
                            duration: const Duration(seconds: 10),
                          )),
                  16.pv,
                  buildSectionTitle('Notificación', Icons.notifications),
                  buildSwitchTile('Activar notificaciones',
                      _notificationsEnabled, _updateNotifications),
                  16.pv,
                  buildSectionTitle('Otros', Icons.settings),
                  buildSwitchTile(
                      'Modo oscuro', _darkModeEnabled, _updateDarkMode),
                  16.pv,
                  buildSectionTitle('Más', Icons.more_horiz),
                  buildListTile(
                    'Sobre nosotros',
                    Icons.info,
                    () => showBottomSheet(context, "Sobre nosotros",
                        "Lorem ipsum dolor sit amet."),
                  ),
                  buildListTile(
                    'Política de privacidad',
                    Icons.privacy_tip,
                    () => showBottomSheet(
                        context, "Privacidad", "Lorem ipsum dolor sit amet."),
                  ),
                  buildListTile(
                    'Preguntas',
                    Icons.question_mark,
                    () => launchBrowserPage("https://www.google.com"),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  void showBottomSheet(BuildContext context, String title, String message) {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
      ),
      builder: (context) => Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Flexible(
                  child: Text(
                    title,
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                ),
              ],
            ),
            10.pv,
            Text(
              message,
              style: Theme.of(context).textTheme.bodyMedium,
            ),
          ],
        ),
      ),
    );
  }

  Widget buildSectionTitle(String title, IconData icon) {
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

  Widget buildListTile(String title, IconData icon, GestureTapCallback onTap) {
    return ListTile(
      leading: Icon(icon, color: AppColors.primaryColor),
      title: Text(title, style: Theme.of(context).textTheme.titleSmall),
      trailing: const Icon(Icons.chevron_right),
      onTap: onTap,
    );
  }

  Widget buildSwitchTile(
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
