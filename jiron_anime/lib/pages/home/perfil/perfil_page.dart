import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/pages/agregarProducto/AgregarProducto.dart';
import 'package:jiron_anime/pages/crearMercado/CrearMercado.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/shared/user_widgets.dart';
import 'package:jiron_anime/pages/home/perfil/widgets/menu_item.dart';
import 'package:jiron_anime/utils/extensions.dart';

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
                    CurrentUser.getClipOvalAvatar(),
                    Text(
                      CurrentUser.fullName ?? 'No hay sesión',
                      style: Theme.of(context).textTheme.titleMedium,
                      textAlign: TextAlign.center,
                    ),
                    Text(
                      CurrentUser.provider ?? '',
                      style: Theme.of(context).textTheme.titleSmall,
                      textAlign: TextAlign.center,
                    ),
                    32.pv,
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
  icon: Icons.add_box_outlined, // Ícono para agregar un producto
  text: 'Agregar producto',
  fnOnTap: () {
    Get.to(() => AgregarProductoScreen());
  },
),
IconMenuItem(
  icon: Icons.storefront_outlined, // Ícono para crear una tienda
  text: 'Crear tienda',
  fnOnTap: () {
    Get.to(() => CreateMarketWidget()); // Navegar a la pantalla de Crear tienda
  },
),


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
