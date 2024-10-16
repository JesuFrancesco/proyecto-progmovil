import 'package:flutter/material.dart';
import 'package:get/get_state_manager/src/rx_flutter/rx_obx_widget.dart';
import 'package:jiron_anime/pages/orders/orders_page.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/utils/hash_simulator.dart';

class HistoryOrdersPage extends StatelessWidget {
  const HistoryOrdersPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: CustomLayout(
      child: SingleChildScrollView(
          child: Column(
        children: [
          kToolbarHeight.pv,
          const CustomAppbar(title: "Historial de pedidos"),
          15.pv,
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                "PEDIDOS REALIZADOS",
                style: Theme.of(context).textTheme.titleMedium,
                textAlign: TextAlign.center,
              )
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
              )
            ],
          ),
          15.pv,
          Obx(
            () => Column(
              children: productoController.productos
                  .take(2) // Limitar a los primeros 3 mangas
                  .map((manga) => Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text("Pedido realizado el: 23/7/2024"),
                                  const SizedBox(height: 8),
                                  // Text("Pedido: ${manga.id}"),
                                  Text("Pedido: ${getRandomString(15)}"),
                                  const SizedBox(height: 8),
                                  const Text("Articulo: 1"),
                                  const SizedBox(height: 8),
                                  const Text("Total: S. 41.00"),
                                ],
                              ),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [
                                  SizedBox(
                                    height: 150,
                                    child: manga.productAttachments != null &&
                                            manga.productAttachments!
                                                .isNotEmpty &&
                                            manga.productAttachments![0]
                                                    .imageUrl !=
                                                null
                                        ? Image.asset(manga
                                            .productAttachments![0].imageUrl!)
                                        : const SizedBox(),
                                  ),
                                ],
                              ),
                            ],
                          ),
                          15.pv,
                        ],
                      ))
                  .toList(),
            ),
          ),
          15.pv,
          const Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Text(
                "JUNIO 2024",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                ),
              )
            ],
          ),
          15.pv,
          Obx(
            () => Column(
              children: productoController.productos
                  .skip(2)
                  .take(2)
                  .map((manga) => Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text("Pedido realizado el: 23/7/2024"),
                                  const SizedBox(height: 8),
                                  // Text("Pedido: ${manga.id}"),
                                  Text("Pedido: ${getRandomString(15)}"),
                                  const SizedBox(height: 8),
                                  const Text("Articulo: 1"),
                                  const SizedBox(height: 8),
                                  const Text("Total: S. 41.00"),
                                ],
                              ),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [
                                  SizedBox(
                                    height: 150,
                                    child: manga.productAttachments != null &&
                                            manga.productAttachments!
                                                .isNotEmpty &&
                                            manga.productAttachments![0]
                                                    .imageUrl !=
                                                null
                                        ? Image.asset(manga
                                            .productAttachments![0].imageUrl!)
                                        : const SizedBox(),
                                  ),
                                ],
                              ),
                            ],
                          ),
                          15.pv,
                        ],
                      ))
                  .toList(),
            ),
          ),
        ],
      )),
    ));
  }
}
