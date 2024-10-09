import 'package:get/get.dart';
import 'package:jiron_anime/models/account.dart';
import 'package:jiron_anime/service/static_accounts_service.dart';

class AccountsController extends GetxController {
  StaticAccountsService service = StaticAccountsService();
  final cuentas = <Account>[].obs;

  void obtenerCuentas() async {
    cuentas.value = await service.fetchAll();
  }
}
