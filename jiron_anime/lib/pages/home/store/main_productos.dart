import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/pages/home/controllers/account_controller.dart';

import '../../../models/account.dart';
import '../../../widgets/account_card.dart';

AccountsController accountController = Get.put(AccountsController());

Widget accountCardsDemo(BuildContext context) {
  return SingleChildScrollView(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        const Text('Productos'),
        Obx(() {
          return ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: accountController.cuentas.toList().length,
              itemBuilder: (context, index) {
                Account cuenta = accountController.cuentas.toList()[index];
                return AccountCard(
                  account: cuenta,
                );
              });
        }),
      ],
    ),
  );
}
