import 'package:get/get.dart';
import 'package:jiron_anime/models/account.dart';
import 'package:jiron_anime/service/account_service.dart';

class AccountsController extends GetxController {
  AccountService service = AccountService();

  final cuenta = Account().obs;

  Future<void> obtenerCuentas() async {
    cuenta.value = await service.fetchMyAccount();
  }
}
