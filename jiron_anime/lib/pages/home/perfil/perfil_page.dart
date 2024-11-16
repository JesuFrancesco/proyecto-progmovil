import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/pages/create_market/create_market_page.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/shared/auth_controller.dart';
import 'package:jiron_anime/pages/home/perfil/widgets/menu_item.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';
import 'package:jiron_anime/pages/mis_tiendas/mi_tienda_page.dart';

class PerfilPage extends StatelessWidget {
  const PerfilPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: CustomScrollView(
          slivers: [
            SliverList(
              delegate: SliverChildListDelegate([
                Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    AuthController.getClipOvalAvatar(),
                    Text(
                      AuthController.fullName ?? 'No hay sesión',
                      style: Theme.of(context).textTheme.titleMedium,
                      textAlign: TextAlign.center,
                    ),
                    Text(
                      AuthController.provider ?? '',
                      style: Theme.of(context).textTheme.titleSmall,
                      textAlign: TextAlign.center,
                    ),

                    32.pv,

                    IconMenuItem(
                      icon: Icons.storefront_outlined,
                      text: 'Mis tiendas',
                      fnOnTap: () {
                        Get.to(() => const MisTiendasPage());
                      },
                    ),

                    IconMenuItem(
                      icon: Icons.storefront_outlined,
                      text: 'Crear tienda',
                      fnOnTap: () {
                        Get.to(() => const CreateMarketPage());
                      },
                    ),

                    IconMenuItem(
                        icon: Icons.shopping_cart_outlined,
                        text: 'Carrito de compras',
                        fnOnTap: () {
                          Get.toNamed("/cart");
                        }),
                    IconMenuItem(
                        icon: Icons.shopping_bag_outlined,
                        text: 'Mis pedidos',
                        fnOnTap: () {
                          Get.toNamed("/orders");
                        }),
                    IconMenuItem(
                        icon: Icons.favorite_border_outlined,
                        text: 'Lista de deseados',
                        fnOnTap: () {
                          Get.toNamed("/wishlist");
                        }),
                    IconMenuItem(
                        icon: Icons.history,
                        text: 'Historial de pedidos',
                        fnOnTap: () {
                          Get.toNamed("/orders-history");
                        }),
                    // NotificationItem(
                    //     icon: Icons.payment,
                    //     text: 'Métodos de pago',
                    //     fnOnTap: () {}),
                    IconMenuItem(
                        icon: Icons.settings_outlined,
                        text: 'Ajustes',
                        fnOnTap: () {
                          Get.toNamed("/settings");
                        }),

                    if (AuthService.isLoggedIn)
                      IconMenuItem(
                          icon: Icons.logout,
                          text: 'Cerrar Sesión',
                          fnOnTap: () async {
                            await AuthService.logout();
                          }),
                    if (!AuthService.isLoggedIn)
                      IconMenuItem(
                          icon: Icons.login,
                          text: "Iniciar Sesión",
                          fnOnTap: () {
                            Get.toNamed("/sign-in");
                          }),
                  ],
                ),
              ]),
            ),
            SliverFillRemaining(
              hasScrollBody: false,
              child: Container(),
            ),
          ],
        ),
      ),
    );
  }
}
