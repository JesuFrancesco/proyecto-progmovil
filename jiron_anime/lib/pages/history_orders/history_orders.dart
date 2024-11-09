import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/order_controller.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/utils/hash_simulator.dart';

final _orderController = OrderController();

class HistoryOrdersPage extends StatelessWidget {
  const HistoryOrdersPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: SingleChildScrollView(
          child: Column(
            children: [
              const CustomAppbar(title: "Historial de pedidos"),
              15.pv,
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "PEDIDOS REALIZADOS",
                    style: Theme.of(context).textTheme.titleMedium,
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
              15.pv,
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
              FutureBuilder<void>(
                future: _orderController.obtenerOrdenesDeCompra(),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  } else if (snapshot.hasError) {
                    return Center(child: Text('Error: ${snapshot.error}'));
                  } else if (snapshot.connectionState == ConnectionState.done) {
                    if (_orderController.ordenes.isEmpty) {
                      return const Expanded(
                          child: Text("No tienes ordenes realizadas"));
                    }
                    return Obx(
                      () => Column(
                        children: _orderController.ordenes
                            .where(
                          (order) => order.status == "Entregado",
                        )
                            .map((order) {
                          return Column(
                            children: [
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      const Text(
                                          "Pedido realizado el: 23/7/2024"),
                                      8.pv,
                                      Text("Pedido: ${getRandomString(15)}"),
                                      8.pv,
                                      Column(
                                        children:
                                            order.orderItems!.map((orderItem) {
                                          return Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                "Articulo: ${orderItem.product!.name}",
                                                maxLines: 1,
                                                overflow: TextOverflow.ellipsis,
                                              ),
                                              8.pv,
                                              Text(
                                                  "Cantidad: ${orderItem.amount}"),
                                              8.pv,
                                              Text(
                                                  "Precio: S. ${orderItem.product!.price?.toStringAsFixed(2)}"),
                                              8.pv,
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.end,
                                                children: [
                                                  SizedBox(
                                                    height: 150,
                                                    child: orderItem.product!
                                                                .productAttachments !=
                                                            null
                                                        ? Image.network(orderItem
                                                            .product!
                                                            .productAttachments![
                                                                0]
                                                            .imageUrl!)
                                                        : const SizedBox(),
                                                  ),
                                                ],
                                              ),
                                            ],
                                          );
                                        }).toList(),
                                      ),
                                      const SizedBox(height: 8),
                                      Text(
                                          "Total: S. ${order.totalPrice!.toStringAsFixed(2)}"),
                                    ],
                                  ),
                                ],
                              ),
                              15.pv,
                            ],
                          );
                        }).toList(),
                      ),
                    );
                  }
                  return const SizedBox();
                },
              ),
              15.pv,
            ],
          ),
        ),
      ),
    );
  }
}
