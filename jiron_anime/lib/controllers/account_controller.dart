import 'package:get/get.dart';
import 'package:jiron_anime/models/account.dart';
import 'package:jiron_anime/service/account_service.dart';

class AccountsController extends GetxController {
  AccountService service = AccountService();
  final cuentas = <Account>[].obs;

  Future<void> obtenerCuentas() async {
    cuentas.value = await service.fetchAll();
  }
}
