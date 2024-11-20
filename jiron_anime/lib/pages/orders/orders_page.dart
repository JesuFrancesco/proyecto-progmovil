import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/order_controller.dart';
import 'package:jiron_anime/pages/orders/widget/order_item.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';
import 'package:jiron_anime/shared/custom_layout.dart';

class OrdersPage extends StatelessWidget {
  const OrdersPage({super.key});

  @override
  Widget build(BuildContext context) {
    final orderController = OrderController();
    return Scaffold(
      body: CustomLayout(
        child: CustomScrollView(
          slivers: [
            SliverFillRemaining(
              hasScrollBody: false,
              child: Column(
                children: [
                  const CustomAppbar(title: "Pedidos"),
                  30.pv,
                  FutureBuilder(
                    future: orderController.obtenerOrdenesDeCompra(),
                    builder: (context, snapshot) {
                      if (snapshot.connectionState == ConnectionState.waiting) {
                        return const Expanded(
                            child: Center(child: CircularProgressIndicator()));
                      }

                      if (orderController.ordenes.isEmpty) {
                        return Expanded(
                          child: Center(
                              child: Text(
                            "No se encontraron pedidos en curso",
                            style: Theme.of(context).textTheme.titleMedium,
                          )),
                        );
                      }

                      return Column(
                        children: [
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "PEDIDOS EN PROCESO",
                                style: Theme.of(context).textTheme.titleMedium,
                                textAlign: TextAlign.center,
                              ),
                            ],
                          ),
                          15.pv,
                          Obx(
                            () => Column(
                                children: List.from(orderController.ordenes
                                    .where((orden) =>
                                        orden.status!.toLowerCase() !=
                                        "completado")
                                    .map((orden) => OrderItemWidget(
                                          orden: orden,
                                          orderController: orderController,
                                        )))),
                          ),
                          15.pv,
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              ElevatedButton(
                                onPressed: () {
                                  Get.toNamed("/orders-history");
                                },
                                style: ElevatedButton.styleFrom(
                                  foregroundColor: Colors.white,
                                  backgroundColor: AppColors.primaryColor,
                                ),
                                child: const Text("IR AL HISTORIAL",
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold)),
                              ),
                            ],
                          ),
                        ],
                      );
                    },
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
