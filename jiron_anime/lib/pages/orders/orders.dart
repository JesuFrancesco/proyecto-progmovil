import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/productos_controller.dart';
import 'package:jiron_anime/pages/history_orders/history_orders.dart';
import 'package:jiron_anime/pages/home/home_page.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/shared/custom_padding.dart';

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
              kToolbarHeight.pv,
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back),
                    onPressed: () {
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const HomePage()),
                      );
                    },
                  ),
                  const Text(
                    "PEDIDOS",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                  ),
                  CurrentUser.getAvatarIcon(),
                ],
              ),
              15.pv,
              const Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "PEDIDOS EN PROCESO",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
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
                                      Text("Pedido: ${manga.id}"),
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

                              // Espacio debajo de cada manga
                              15.pv,

                              // Botón de "CHAT" y fila con CircleAvatar y texto
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  ElevatedButton(
                                    onPressed: () {
                                      // Acción del botón de chat
                                    },
                                    style: ElevatedButton.styleFrom(
                                      foregroundColor: Colors.white,
                                      backgroundColor: Colors.black,
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
                                      const Text(
                                        "WAZA1",
                                        style: TextStyle(
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
                      backgroundColor: Colors.black,
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
