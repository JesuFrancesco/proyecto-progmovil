import 'package:flutter/material.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';

class TiendaFooterWidget extends StatelessWidget {
  const TiendaFooterWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "Contáctanos por ...",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
              textAlign: TextAlign.center,
            ),
          ],
        ),
        15.pv,
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.facebook),
            20.ph,
            const Icon(Icons.phone),
            20.ph,
            const Icon(Icons.sms),
          ],
        ),
        15.pv,
        const Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "Jiron anime - Todos los derechos reservados",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ],
    );
  }
}
