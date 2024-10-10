import 'package:flutter/material.dart';
import 'package:jiron_anime/shared/boton_retroceso.dart';
import 'package:jiron_anime/shared/usuario_controller.dart';

class CustomAppbar extends StatelessWidget {
  final String title;
  const CustomAppbar({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const BotonRetroceso(),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                title,
                style: Theme.of(context).textTheme.titleLarge,
                textAlign: TextAlign.center,
                overflow: TextOverflow.visible,
              ),
            ],
          ),
        ),
        CurrentUser.getAvatarIcon(),
      ],
    );
  }
}
