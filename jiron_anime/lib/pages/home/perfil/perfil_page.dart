import 'package:flutter/material.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';
import 'package:jiron_anime/pages/home/perfil/widgets/menu_item.dart';
import 'package:jiron_anime/utils/extensions.dart';
import '../../../main.dart';

class PerfilPage extends StatelessWidget {
  const PerfilPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
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
              Navigator.of(context).pushNamed("/cart");
            }),
        IconMenuItem(
            context: context,
            icon: Icons.shopping_bag_outlined,
            text: 'Mis pedidos',
            fnOnTap: () {
              Navigator.of(context).pushNamed("/orders");
            }),
        IconMenuItem(
            context: context,
            icon: Icons.favorite,
            text: 'Lista de deseados',
            fnOnTap: () {
              Navigator.of(context).pushNamed("/wishlist");
            }),
        IconMenuItem(
            context: context,
            icon: Icons.history,
            text: 'Historial de pedidos',
            fnOnTap: () {
              Navigator.of(context).pushNamed("/orders-history");
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
              Navigator.of(context).pushNamed("/settings");
            }),
        const Spacer(),
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
              Navigator.of(context.mounted ? context : context)
                  .popAndPushNamed("/sign-in");
            })
      ],
    );
  }
}
