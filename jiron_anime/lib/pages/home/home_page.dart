import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/home/settings/main_settings.dart';
import 'package:jiron_anime/pages/home/store/main_productos.dart';
import 'package:jiron_anime/pages/home/search/main_search.dart';
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
        return accountCardsDemo(context);
      case StoreWidgetType.buscar:
        return searchProductsAndMarketsDemo(context);
      case StoreWidgetType.notificaciones:
        return const Center(child: Text('Notificaciones template 111'));
      case StoreWidgetType.ajustes:
        return settingsContainer(context);
      default:
        return const Center(child: Text('NOT A REAL PAGE'));
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
    control.obtenerCuentas();
    return Scaffold(
      // https://docs.flutter.dev/ui/layout/scrolling/slivers
      // body: CustomScrollView(
      //   slivers: [
      //     const SliverAppBar(
      //       floating: true,
      //       title: Text("Jiron Anime"),
      //     ),
      //     SliverToBoxAdapter(
      //       child: _buildBody(context),
      //     )
      //   ],
      // ),
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
