import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/pages/home/perfil/widgets/menu_item.dart';
import 'package:jiron_anime/utils/extensions.dart';
import '../../../main.dart';

class PerfilPage extends StatelessWidget {
  const PerfilPage({super.key});

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
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
                    context: context,
                    icon: Icons.shopping_cart,
                    text: 'Carrito de compras',
                    fnOnTap: () {
                      Get.toNamed("/cart");
                    }),
                IconMenuItem(
                    context: context,
                    icon: Icons.shopping_bag_outlined,
                    text: 'Mis pedidos',
                    fnOnTap: () {
                      Get.toNamed("/orders");
                    }),
                IconMenuItem(
                    context: context,
                    icon: Icons.favorite,
                    text: 'Lista de deseados',
                    fnOnTap: () {
                      Get.toNamed("/wishlist");
                    }),
                IconMenuItem(
                    context: context,
                    icon: Icons.history,
                    text: 'Historial de pedidos',
                    fnOnTap: () {
                      Get.toNamed("/orders-history");
                    }),
                // NotificationItem(
                //     context: context,
                //     icon: Icons.payment,
                //     text: 'Métodos de pago',
                //     fnOnTap: () {}),
                IconMenuItem(
                    context: context,
                    icon: Icons.settings,
                    text: 'Ajustes',
                    fnOnTap: () {
                      Get.toNamed("/settings");
                    }),
                IconMenuItem(
                    context: context,
                    icon: (supabase.auth.currentSession != null)
                        ? Icons.logout
                        : Icons.login,
                    text: (supabase.auth.currentSession != null)
                        ? 'Cerrar Sesión'
                        : "Iniciar Sesión",
                    fnOnTap: () async {
                      await supabase.auth.signOut();
                      Get.toNamed("/sign-in");
                    }),
              ],
            ),
          ]),
        ),
        SliverFillRemaining(
          hasScrollBody: false, // Prevent scrolling inside the remaining space
          child:
              Container(), // Empty container to fill remaining space, can be customized
        ),
      ],
    );
  }
}
