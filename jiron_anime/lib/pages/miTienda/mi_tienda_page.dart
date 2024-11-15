import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/market_controller.dart';
import 'package:jiron_anime/models/market.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';

class MisMercadosPage extends StatelessWidget {
  MisMercadosPage({super.key});

  final MarketController _marketController = Get.put(MarketController(), permanent: true);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            CustomAppbar(title: "Mis Mercados"),
            const SizedBox(height: 16),
            Expanded(
              child: Obx(
                () {
                  // Si la lista de mercados está vacía, mostramos un indicador de carga
                  if (_marketController.markets.isEmpty) {
                    return Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const CircularProgressIndicator(),
                          const SizedBox(height: 8),
                          Text(
                            "Cargando mercados...",
                            style: Theme.of(context).textTheme.bodyMedium,
                          ),
                        ],
                      ),
                    );
                  }

                  // Si la lista de mercados ya está cargada, la mostramos en un ListView
                  return ListView.builder(
                    itemCount: _marketController.markets.length,
                    itemBuilder: (context, index) {
                      final Market market = _marketController.markets[index];

                      return Card(
                        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                        ),
                        elevation: 5,
                        child: Padding(
                          padding: const EdgeInsets.all(16.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              // Nombre del mercado
                              Text(
                                market.name ?? "Nombre no disponible",
                                style: Theme.of(context).textTheme.titleLarge,
                              ),
                              const SizedBox(height: 8),
                              
                              // Email de contacto
                              Text("Correo: ${market.contactEmail ?? 'No disponible'}"),
                              const SizedBox(height: 4),
                              
                              // Teléfono de contacto
                              Text("Teléfono: ${market.contactPhone ?? 'No disponible'}"),

                              const SizedBox(height: 16),

                              // Botón "Agregar Producto" con estilo similar al de "Crear Mercado"
                              Center(
                                child: ElevatedButton(
                                  onPressed: () {
                                    // Acción de agregar producto (sin funcionalidad por ahora)
                                  },
                                  style: ElevatedButton.styleFrom( // Fondo gris oscuro
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(12), // Bordes redondeados
                                    ),
                                    padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 24), // Padding
                                  ),
                                  child: const Text("Agregar producto"),
                                ),
                              ),

                              const SizedBox(height: 16),

                              // Mostrar productos del mercado
                              if (market.products?.isNotEmpty ?? false) // Verificar si hay productos
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text(
                                      "Productos:",
                                      style: TextStyle(fontWeight: FontWeight.bold),
                                    ),
                                    const SizedBox(height: 8),
                                    ListView.builder(
                                      shrinkWrap: true,  // Para que no use todo el espacio disponible
                                      physics: const NeverScrollableScrollPhysics(),  // Para que no se pueda desplazar
                                      itemCount: market.products?.length ?? 0,
                                      itemBuilder: (context, productIndex) {
                                        final product = market.products?[productIndex];

                                        return Container(
                                          margin: const EdgeInsets.only(bottom: 8), // Espacio entre productos
                                          decoration: BoxDecoration(
                                            border: Border.all(
                                              color: Colors.grey.shade300, // Color del borde sutil
                                              width: 1, // Grosor del borde
                                            ),
                                            borderRadius: BorderRadius.circular(8), // Bordes redondeados
                                          ),
                                          child: ListTile(
                                            contentPadding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                                            title: Text(product?.name ?? "Producto sin nombre"),
                                            subtitle: Text(
                                              "Precio: \$${product?.price ?? 'No disponible'}",
                                            ),
                                            onTap: () {
                                              // Acción al hacer tap en el producto
                                            },
                                          ),
                                        );
                                      },
                                    ),
                                  ],
                                )
                              else
                                const Text("No hay productos disponibles para este mercado."),
                            ],
                          ),
                        ),
                      );
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
