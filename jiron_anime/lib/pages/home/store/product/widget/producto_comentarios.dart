// ignore_for_file: unnecessary_const

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/pregunta_controller.dart';
import 'package:jiron_anime/controllers/rating_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/shared/small_circular_indicator.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';

class PreguntasProducto extends StatelessWidget {
  final Product producto;
  const PreguntasProducto({super.key, required this.producto});

  @override
  Widget build(BuildContext context) {
    final preguntasController = Get.put(PreguntaController(), permanent: true);
    final ratingsController = Get.put(RatingController(), permanent: true);

    return Row(
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                "Preguntas",
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
              10.pv,
              FutureBuilder<void>(
                future: preguntasController
                    .obtenerPreguntasDeProducto(producto.id!),
                builder: (ctx, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: SmallCircularIndicator(),
                    );
                  }

                  if (snapshot.hasError) {
                    return const Expanded(
                      child: Center(
                        child: Text("Error al cargar las preguntas"),
                      ),
                    );
                  }

                  if (preguntasController.preguntas.isEmpty) {
                    return Center(
                      child: Padding(
                        padding: const EdgeInsets.all(32.0),
                        child: Text("Sé el primero en preguntar",
                            style: Theme.of(context).textTheme.titleMedium),
                      ),
                    );
                  }

                  return Column(
                    children: preguntasController.preguntas
                        .map((pregunta) => PreguntaWidget(
                              pregunta: pregunta,
                            ))
                        .toList(),
                  );
                },
              ),
              const Text(
                "Reseñas",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
              10.pv,
              // ReseniaWidget(resenia: ,),
              FutureBuilder<void>(
                future:
                    ratingsController.obtenerRatingsDeProducto(producto.id!),
                builder: (ctx, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: SmallCircularIndicator(),
                    );
                  }

                  if (snapshot.hasError) {
                    return const Expanded(
                      child: Center(
                        child: Text("Error al cargar las preguntas"),
                      ),
                    );
                  }

                  if (ratingsController.ratings.isEmpty) {
                    return Center(
                      child: Padding(
                        padding: const EdgeInsets.all(32.0),
                        child: Text("¡Sé el primero en reseñar!",
                            style: Theme.of(context).textTheme.titleMedium),
                      ),
                    );
                  }

                  return Column(
                    children: ratingsController.ratings
                        .map((rating) => ReseniaWidget(
                              resenia: rating,
                            ))
                        .toList(),
                  );
                },
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class PreguntaWidget extends StatelessWidget {
  final ProductQuestion pregunta;
  const PreguntaWidget({super.key, required this.pregunta});

  @override
  Widget build(BuildContext context) {
    final username = pregunta.client != null
        ? pregunta.client!.profile!.email!
        : "Cuenta eliminada";
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            CircleAvatar(
              child: Text(username.substring(0, 1).toUpperCase()),
            ),
            10.ph,
            Text(
              username,
              style: const TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 16,
              ),
            ),
          ],
        ),
        10.pv,
        Text(
          pregunta.text!,
          style: const TextStyle(fontSize: 14),
        ),
        20.pv,
      ],
    );
  }
}

class ReseniaWidget extends StatelessWidget {
  final ProductRating resenia;
  const ReseniaWidget({super.key, required this.resenia});

  @override
  Widget build(BuildContext context) {
    final username = resenia.client!.profile!.email ?? "Anónimo";
    return Column(
      children: [
        Row(
          children: [
            CircleAvatar(
              child: Text(username.substring(0, 1).toUpperCase()),
            ),
            10.ph,
            Text(
              username,
              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
            ),
          ],
        ),
        Row(children: List.filled(resenia.score!, const EstrellaWidget())),
        10.pv,
        Text(
          resenia.text!,
          style: const TextStyle(fontSize: 14),
        ),
      ],
    );
  }
}

class EstrellaWidget extends StatelessWidget {
  const EstrellaWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Icon(
      Icons.star,
      color: Colors.yellow,
    );
  }
}
