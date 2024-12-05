import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/models/market.dart';
import 'package:jiron_anime/pages/chat/chat_page.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/shared/auth_controller.dart';
import 'package:jiron_anime/pages/home/perfil/widgets/menu_item.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';

class PerfilPage extends StatelessWidget {
  const PerfilPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.message),
        onPressed: () => Get.to(() => ChatPage(
                mercado: Market(
              name: "Soporte",
              contactEmail: "jironanime@example.com",
            ))),
      ),
      body: CustomLayout(
        child: CustomScrollView(
          slivers: [
            SliverList(
              delegate: SliverChildListDelegate([
                Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    16.pv,

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

                    16.pv,

                    IconMenuItem(
                      icon: Icons.storefront_outlined,
                      text: 'Mis tiendas',
                      fnOnTap: () {
                        Get.toNamed("/my-markets");
                      },
                    ),

                    // IconMenuItem(
                    //   icon: Icons.storefront_outlined,
                    //   text: 'Crear tienda',
                    //   fnOnTap: () {
                    //     Get.toNamed("/create-market");
                    //   },
                    // ),

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
                    IconMenuItem(
                        icon: Icons.lightbulb_sharp,
                        text: 'WebSockets module',
                        fnOnTap: () {
                          Get.toNamed("/forum");
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
