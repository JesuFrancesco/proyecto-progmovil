import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../../models/account.dart';
import '../../../widgets/account_card.dart';
import '../store_controller.dart';

StoreController control = Get.put(StoreController());

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
  );
}
