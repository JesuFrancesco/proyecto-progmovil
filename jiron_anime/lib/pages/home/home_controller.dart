import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/models/account.dart';
import 'package:jiron_anime/service/static_accounts_service.dart';

class HomeController extends GetxController {
  StaticAccountsService service = StaticAccountsService();
  final cuentas = <Account>[].obs;

  void obtenerCuentas() async {
    cuentas.value = await service.fetchAll();
  }
}

class SearchTxtController extends GetxController {
  TextEditingController txtSearch = TextEditingController();
  RxString busqueda = ''.obs;
}
