// ignore_for_file: unnecessary_const

import 'package:flutter/material.dart';
import 'package:jiron_anime/utils/extensions.dart';

class Preguntas extends StatelessWidget {
  const Preguntas({super.key});

  @override
  Widget build(BuildContext context) {
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
              const Row(
                children: [
                  CircleAvatar(
                    child: Text("WA3"),
                  ),
                  SizedBox(width: 10),
                  Text(
                    "Yennefer Doe",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              const Text(
                "¿Hay algún tipo de oferta o promoción para comprar la serie completa de Chainsaw Man en lugar de volúmenes individuales?",
                style: TextStyle(fontSize: 14),
              ),
              10.pv,
              const Row(
                children: [
                  CircleAvatar(
                    child: Text("WA3"),
                  ),
                  SizedBox(width: 10),
                  Text(
                    "Yennefer Doe",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              const Text(
                "¿Puedo encontrar los volúmenes antiguos de Chainsaw Man en su tienda o solo tienen los más recientes?",
                style: TextStyle(fontSize: 14),
              ),
              10.pv,
              const Text(
                "Resenas",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
              10.pv,
              const Row(
                children: [
                  CircleAvatar(
                    child: Text("WA3"),
                  ),
                  SizedBox(width: 10),
                  Text(
                    "Yennefer Doe",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                ],
              ),
              Row(
                children: [
                  const Icon(
                    Icons.star,
                    color: Colors.yellow,
                  ),
                  const Icon(
                    Icons.star,
                    color: Colors.yellow,
                  ),
                  const Icon(
                    Icons.star,
                    color: Colors.yellow,
                  ),
                  const Icon(
                    Icons.star,
                    color: Colors.yellow,
                  ),
                  const Icon(
                    Icons.star,
                    color: Colors.yellow,
                  ),
                  10.ph,
                  const Text(
                    "Excelente manga",
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              const Text(
                "La trama de Chainsaw Man es bastante oscura y madura. Creo que es una gran opción para quienes buscan algo más serio y con más profundidad.",
                style: TextStyle(fontSize: 14),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
