import 'package:flutter/material.dart';
import 'package:jiron_anime/controllers/order_controller.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/utils/hash_simulator.dart';

final _orderController = OrderController();

class HistoryOrdersPage extends StatelessWidget {
  const HistoryOrdersPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: CustomScrollView(
          slivers: [
            SliverFillRemaining(
              hasScrollBody: false,
              child: Column(
                children: [
                  const CustomAppbar(title: "Historial de pedidos"),
                  // 15.pv,
                  FutureBuilder(
                    future: _orderController.obtenerOrdenesDeCompra(),
                    builder: (context, snapshot) {
                      if (snapshot.connectionState == ConnectionState.waiting) {
                        return const Expanded(
                          child: Center(child: CircularProgressIndicator()),
                        );
                      } else if (snapshot.hasError) {
                        return Expanded(
                          child:
                              Center(child: Text('Error: ${snapshot.error}')),
                        );
                      } else if (_orderController.ordenes.isEmpty) {
                        return const Expanded(
                          child: Center(
                              child: Text("No tienes ordenes realizadas")),
                        );
                      }

                      return Column(
                        children: _orderController.ordenes
                            .where((order) => order.status == "Entregado")
                            .map((order) {
                          return Padding(
                            padding: const EdgeInsets.symmetric(vertical: 8.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  "Pedido realizado el: 23/7/2024",
                                  style: Theme.of(context).textTheme.bodyMedium,
                                ),
                                8.pv,
                                Text("Pedido: ${getRandomString(15)}",
                                    style:
                                        Theme.of(context).textTheme.bodySmall),
                                8.pv,
                                ...order.orderItems!.map((orderItem) {
                                  return Padding(
                                    padding: const EdgeInsets.only(bottom: 8.0),
                                    child: Row(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Expanded(
                                          flex: 3,
                                          child: Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                "Artículo: ${orderItem.product!.name}",
                                                maxLines: 1,
                                                overflow: TextOverflow.ellipsis,
                                              ),
                                              Text(
                                                  "Cantidad: ${orderItem.amount}"),
                                              Text(
                                                  "Precio: S. ${orderItem.product!.price?.toStringAsFixed(2)}"),
                                            ],
                                          ),
                                        ),
                                        if (orderItem
                                                .product!
                                                .productAttachments
                                                ?.isNotEmpty ??
                                            false)
                                          Expanded(
                                            flex: 2,
                                            child: Image.network(
                                              orderItem
                                                  .product!
                                                  .productAttachments![0]
                                                  .imageUrl!,
                                              height: 100,
                                              fit: BoxFit.cover,
                                            ),
                                          ),
                                      ],
                                    ),
                                  );
                                }),
                                8.pv,
                                Text(
                                  "Total: S. ${order.totalPrice!.toStringAsFixed(2)}",
                                  style: const TextStyle(
                                      fontWeight: FontWeight.bold),
                                ),
                                const Divider(thickness: 1),
                              ],
                            ),
                          );
                        }).toList(),
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
