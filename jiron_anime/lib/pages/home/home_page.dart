import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/home/notifications/notifications_page.dart';
import 'package:jiron_anime/pages/home/search/busqueda.dart';
import 'package:jiron_anime/pages/home/settings/settings_page.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';
import 'package:jiron_anime/theme/colors.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

enum StoreWidgetType {
  tienda,
  buscar,
  notificaciones,
  ajustes,
}

class _HomePageState extends State<HomePage> {
  late Widget _body;
  StoreWidgetType _selectedWidget = StoreWidgetType.tienda;

  @override
  void initState() {
    super.initState();
    _body = _getBody(_selectedWidget);
  }

  Widget _getBody(StoreWidgetType index) {
    switch (index) {
      case StoreWidgetType.tienda:
        return TiendaPage();
      case StoreWidgetType.buscar:
        // return searchProductsAndMarketsDemo(context);
        return const BusquedaPage();
      case StoreWidgetType.notificaciones:
        return NotificationsPage(context: context);
      case StoreWidgetType.ajustes:
        return SettingsPage(context: context);
      default:
        return const Center(child: Text('PAGINA NO IMPLEMENTADA'));
    }
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedWidget = StoreWidgetType.values[index];
      _body = _getBody(_selectedWidget);
    });
  }

  Widget _buildBody(BuildContext context) {
    return SafeArea(
      child: Container(
        child: _body,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // widget
    return Scaffold(
      body: _buildBody(context),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        fixedColor: AppColors.primaryColor,
        items: const [
          BottomNavigationBarItem(
              icon: Icon(Icons.shopping_cart), label: "Tienda"),
          BottomNavigationBarItem(icon: Icon(Icons.search), label: "Buscar"),
          BottomNavigationBarItem(
              icon: Icon(Icons.notifications), label: "Notificaciones"),
          BottomNavigationBarItem(icon: Icon(Icons.settings), label: "Ajustes")
        ],
        currentIndex: _selectedWidget.index,
        onTap: _onItemTapped,
      ),
    );
  }
}
