import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/market_controller.dart';
import 'package:jiron_anime/models/market.dart';
import 'package:jiron_anime/models/product.dart';
import 'package:jiron_anime/pages/create_product/create_product_page.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';

class MisTiendasPage extends StatelessWidget {
  const MisTiendasPage({super.key});

  @override
  Widget build(BuildContext context) {
    final MarketController marketController =
        Get.put(MarketController(), permanent: true);

    return Scaffold(
      body: CustomLayout(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const CustomAppbar(title: "Mis tiendas"),
            16.pv,
            FutureBuilder(
              future: marketController.obtenerMisMercados(),
              builder: (ctx, snapshot) =>
                  (snapshot.connectionState == ConnectionState.waiting)
                      ? getLoadingMercadosIndicator(context)
                      : Expanded(
                          child: Obx(
                            () {
                              if (marketController.markets.isEmpty) {
                                return Center(
                                  child: Column(
                                    children: [
                                      const Text("No tienes mercados"),
                                      ElevatedButton(
                                          onPressed: () =>
                                              Get.toNamed("/create-market"),
                                          child: const Text("Crear uno"))
                                    ],
                                  ),
                                );
                              }

                              // Si la lista de mercados ya está cargada, la mostramos en un ListView
                              return ListView.builder(
                                itemCount: marketController.markets.length,
                                itemBuilder: (context, index) {
                                  final Market market =
                                      marketController.markets[index];

                                  return Card(
                                    margin: const EdgeInsets.symmetric(
                                        horizontal: 16, vertical: 8),
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(12),
                                    ),
                                    elevation: 5,
                                    child: MercadoCardWidget(market: market),
                                  );
                                },
                              );
                            },
                          ),
                        ),
            ),
          ],
        ),
      ),
    );
  }

  Center getLoadingMercadosIndicator(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const CircularProgressIndicator(),
          8.pv,
          Text(
            "Cargando mercados...",
            style: Theme.of(context).textTheme.bodyMedium,
          ),
        ],
      ),
    );
  }
}

class MercadoCardWidget extends StatelessWidget {
  const MercadoCardWidget({
    super.key,
    required this.market,
  });

  final Market market;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                market.name ?? "Nombre no disponible",
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.titleLarge,
              ),
              16.pv,
              Center(
                child: SizedBox(
                  height: 256,
                  child: Image.network(
                    market.logoUrl!,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ],
          ),
          8.pv,
          Text("Correo: ${market.contactEmail ?? 'No disponible'}"),
          4.pv,
          Text("Teléfono: ${market.contactPhone ?? 'No disponible'}"),
          16.pv,
          Center(
            child: ElevatedButton(
              onPressed: () => Get.to(() => AgregarProductoScreen(
                    market: market,
                  )),
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                padding:
                    const EdgeInsets.symmetric(vertical: 12, horizontal: 24),
              ),
              child: const Text("Agregar producto"),
            ),
          ),
          16.pv,
          if (market.products?.isNotEmpty ?? false)
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  "Productos:",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                8.pv,
                ListView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  itemCount: market.products?.length ?? 0,
                  itemBuilder: (context, productIndex) {
                    final product = market.products?[productIndex];

                    return MercadoProductWidget(product: product);
                  },
                ),
              ],
            )
          else
            const Text("No hay productos disponibles para este mercado."),
        ],
      ),
    );
  }
}

class MercadoProductWidget extends StatelessWidget {
  const MercadoProductWidget({
    super.key,
    required this.product,
  });

  final Product? product;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.grey.shade300,
          width: 1,
        ),
        borderRadius: BorderRadius.circular(8),
      ),
      child: ListTile(
        contentPadding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
        title: Text(product?.name ?? "Producto sin nombre"),
        subtitle: Text(
          "Precio: \$${product?.price ?? 'No disponible'}",
        ),
        onTap: () {},
      ),
    );
  }
}
