import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/order_controller.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/utils/hash_simulator.dart';

final _orderController = OrderController();

class OrdersPage extends StatelessWidget {
  const OrdersPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: SingleChildScrollView(
          child: Column(
            children: [
              const CustomAppbar(title: "Pedidos"),
              30.pv,
              FutureBuilder(
                future: _orderController.obtenerOrdenesDeCompra(),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  }

                  if (_orderController.ordenes.isEmpty) {
                    return const Center(
                        child: Text("No se encontraron pedidos en curso"));
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
                      const Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          Text(
                            "JULIO 2024",
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                      15.pv,
                      Obx(
                        () => Column(
                          children: _orderController.ordenes
                              .where((orden) => orden.status != "Entregado")
                              .map((orden) => Column(
                                    children: [
                                      Column(
                                        children: [
                                          Row(
                                              mainAxisAlignment:
                                                  MainAxisAlignment.start,
                                              children: [
                                                Text(
                                                  "Orden n° ${orden.id}",
                                                  style: Theme.of(context)
                                                      .textTheme
                                                      .titleMedium,
                                                )
                                              ]),
                                          ...orden.orderItems!.map((orderItem) {
                                            return Column(
                                              children: [
                                                Row(
                                                  mainAxisAlignment:
                                                      MainAxisAlignment
                                                          .spaceBetween,
                                                  children: [
                                                    Column(
                                                      crossAxisAlignment:
                                                          CrossAxisAlignment
                                                              .start,
                                                      children: [
                                                        const Text(
                                                            "Pedido realizado el: 23/7/2024"),
                                                        8.pv,
                                                        Text(
                                                            "Pedido: ${getRandomString(15)}"),
                                                        8.pv,
                                                        Text(
                                                          "Articulo: ${orderItem.product!.name}",
                                                          overflow: TextOverflow
                                                              .ellipsis,
                                                          maxLines: 1,
                                                        ),
                                                        8.pv,
                                                        Text(
                                                            "Total: S. ${orderItem.product!.price?.toStringAsFixed(2)}"),
                                                      ],
                                                    ),
                                                    Flexible(
                                                      child: Column(
                                                        crossAxisAlignment:
                                                            CrossAxisAlignment
                                                                .end,
                                                        children: [
                                                          SizedBox(
                                                            height: 150,
                                                            child: orderItem
                                                                        .product!
                                                                        .productAttachments !=
                                                                    null
                                                                ? Image.network(
                                                                    orderItem
                                                                        .product!
                                                                        .productAttachments![
                                                                            0]
                                                                        .imageUrl!)
                                                                : const SizedBox(),
                                                          ),
                                                        ],
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                                15.pv,
                                                Row(
                                                  mainAxisAlignment:
                                                      MainAxisAlignment
                                                          .spaceBetween,
                                                  children: [
                                                    ElevatedButton(
                                                      onPressed: () =>
                                                          Get.toNamed("/chat"),
                                                      style: ElevatedButton
                                                          .styleFrom(
                                                        foregroundColor:
                                                            Colors.white,
                                                        backgroundColor:
                                                            AppColors
                                                                .primaryColor,
                                                      ),
                                                      child: const Text("CHAT",
                                                          style: TextStyle(
                                                              fontSize: 16,
                                                              fontWeight:
                                                                  FontWeight
                                                                      .bold)),
                                                    ),
                                                    Row(
                                                      children: [
                                                        CurrentUser
                                                            .getAvatarIcon(),
                                                        8.ph,
                                                        Text(
                                                          orderItem.product!
                                                              .market!.name!
                                                              .trim(),
                                                          style:
                                                              Theme.of(context)
                                                                  .textTheme
                                                                  .titleSmall,
                                                          overflow:
                                                              TextOverflow.fade,
                                                        ),
                                                      ],
                                                    ),
                                                  ],
                                                ),
                                              ],
                                            );
                                          })
                                        ],
                                      ),
                                      15.pv,
                                    ],
                                  ))
                              .toList(),
                        ),
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
                                style: TextStyle(fontWeight: FontWeight.bold)),
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
      ),
    );
  }
}
