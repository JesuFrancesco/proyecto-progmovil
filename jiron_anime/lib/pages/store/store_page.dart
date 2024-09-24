import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'store_controller.dart';

class StorePage extends StatefulWidget {
  const StorePage({super.key});

  @override
  State<StorePage> createState() => _StorePageState();
}

class _StorePageState extends State<StorePage> {
  int _selectedIndex = 0;
  StoreController control = Get.put(StoreController());

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  final List<Widget> _pages = [
    "pagina 1",
    "pagina 2",
    "pagina 3",
    "pagina 4",
  ].map((String content) {
    return Center(
      child: Text(
        content,
        style: const TextStyle(fontSize: 32, fontFamily: "Times"),
      ),
    );
  }).toList();

  Widget _buildBody(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Scaffold(
          body: _pages[_selectedIndex],
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
