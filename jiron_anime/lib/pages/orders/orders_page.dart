import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/pages/history_orders/history_orders.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/utils/hash_simulator.dart';

final ProductoController productoController = Get.put(ProductoController());

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
                  children: productoController.productos
                      .take(3) // Limitar a los primeros 3 mangas
                      .map((manga) => Column(
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
                                        child:
                                            manga.productAttachments != null &&
                                                    manga.productAttachments!
                                                        .isNotEmpty &&
                                                    manga.productAttachments![0]
                                                            .imageUrl !=
                                                        null
                                                ? Image.asset(manga
                                                    .productAttachments![0]
                                                    .imageUrl!)
                                                : const SizedBox(),
                                      ),
                                    ],
                                  ),
                                ],
                              ),

                              15.pv,

                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  ElevatedButton(
                                    onPressed: () {},
                                    style: ElevatedButton.styleFrom(
                                      foregroundColor: Colors.white,
                                      backgroundColor: AppColors.primaryColor,
                                    ),
                                    child: const Text("CHAT",
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold)),
                                  ),
                                  Row(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.center,
                                    children: [
                                      CurrentUser.getAvatarIcon(),
                                      const SizedBox(width: 8),
                                      Text(
                                        manga.market!.name!,
                                        style: const TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 20),
                                      ),
                                    ],
                                  ),
                                ],
                              ),

                              // Espacio adicional entre mangas
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
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const HistoryOrdersPage()),
                      );
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
          ),
        ),
      ),
    );
  }
}
