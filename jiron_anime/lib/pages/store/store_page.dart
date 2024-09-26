import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/models/account.dart';
import 'package:jiron_anime/pages/store/shared/main_productos.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/theme/theme.dart';
import 'package:jiron_anime/widgets/account_card.dart';
import 'store_controller.dart';

class StorePage extends StatefulWidget {
  const StorePage({super.key});

  @override
  State<StorePage> createState() => _StorePageState();
}

enum StoreWidgetType {
  tienda,
  buscar,
  notificaciones,
  ajustes,
}

class _StorePageState extends State<StorePage> {
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
        return const Center(child: Text('Buscar template'));
      case StoreWidgetType.notificaciones:
        return const Center(child: Text('Notificaciones template'));
      case StoreWidgetType.ajustes:
        return const Center(child: Text('Ajustes template'));
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
      body: CustomScrollView(
        slivers: [
          const SliverAppBar(
            floating: true,
            title: Text("Jiron Anime"),
          ),
          SliverToBoxAdapter(
            child: _buildBody(context),
          )
        ],
      ),
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
