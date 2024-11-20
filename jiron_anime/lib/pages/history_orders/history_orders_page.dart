import 'package:flutter/material.dart';
import 'package:jiron_anime/controllers/order_controller.dart';
import 'package:jiron_anime/pages/history_orders/widgets/history_order_item.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';
import 'package:jiron_anime/shared/custom_layout.dart';

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
                  15.pv,
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
                        return Expanded(
                          child: Center(
                              child: Text(
                            "No tienes órdenes realizadas",
                            style: Theme.of(context).textTheme.titleMedium,
                          )),
                        );
                      }

                      return Expanded(
                        child: ListView.builder(
                          itemCount: _orderController.ordenes
                              .where((order) =>
                                  order.status!.toLowerCase() == "completado")
                              .length,
                          itemBuilder: (context, index) {
                            final order = _orderController.ordenes
                                .where((order) =>
                                    order.status!.toLowerCase() == "completado")
                                .toList()[index];
                            return Padding(
                              padding: const EdgeInsets.symmetric(
                                  horizontal: 16.0, vertical: 8.0),
                              child: Card(
                                elevation: 4,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: Padding(
                                  padding: const EdgeInsets.all(12.0),
                                  child: HistoryOrderItem(order: order),
                                ),
                              ),
                            );
                          },
                        ),
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
