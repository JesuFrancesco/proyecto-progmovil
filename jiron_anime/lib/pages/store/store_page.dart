import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/models/account.dart';
import 'package:jiron_anime/service/static_accounts_service.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/widgets/account_card.dart';
import 'store_controller.dart';

class StorePage extends StatefulWidget {
  const StorePage({super.key});

  @override
  State<StorePage> createState() => _StorePageState();
}

class _StorePageState extends State<StorePage> {
  late Widget _body;
  int _selectedIndex = 0;
  StoreController control = Get.put(StoreController());

  @override
  void initState() {
    super.initState();
    _body = _getBody(_selectedIndex);
  }

  Widget _getBody(int index) {
    switch (index) {
      case 0:
        return _accountCards();
      case 1:
        return Center(child: Text('Página 2'));
      case 2:
        return Center(child: Text('Página 3'));
      default:
        return Center(child: Text('Página 1'));
    }
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
      _body = _getBody(index);
    });
  }

  Widget _accountCards() {
    return SingleChildScrollView(
        child: Padding(
      padding: EdgeInsets.all(15),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('Productos',
              style: TextStyle(
                fontSize: 22,
              )),
          Obx(() {
            return ListView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: control.cuentas.toList().length,
                itemBuilder: (context, index) {
                  Account cuenta = control.cuentas.toList()[index];
                  return AccountCard(
                    account: cuenta,
                  );
                });
          }),
        ],
      ),
    ));
  }

  Widget _buildBody(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Scaffold(
          body: _body,
        ),
        bottomNavigationBar: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          items: const [
            BottomNavigationBarItem(
                icon: Icon(Icons.shopping_cart), label: "Tienda"),
            BottomNavigationBarItem(icon: Icon(Icons.search), label: "Buscar"),
            BottomNavigationBarItem(
                icon: Icon(Icons.notifications), label: "Notificaciones"),
            BottomNavigationBarItem(
                icon: Icon(Icons.settings), label: "Ajustes")
          ],
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    control.obtenerCuentas();
    return MaterialApp(
        home: Scaffold(
            resizeToAvoidBottomInset: false,
            appBar: AppBar(
              title: const Text(
                "Jiron Anime",
                style:
                    TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
              ),
              backgroundColor: AppColors.primaryColor,
            ),
            body: _buildBody(context)));
  }
}
