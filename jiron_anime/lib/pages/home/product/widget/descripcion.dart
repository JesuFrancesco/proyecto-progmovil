import 'package:flutter/material.dart';
import 'package:jiron_anime/utils/extensions.dart';

class Descripcion extends StatelessWidget {
  const Descripcion({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Row(
                children: [
                  Text(
                    "Descripción",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                  ),
                  SizedBox(width: 8),
                ],
              ),
              10.pv,
              const Text(
                  "Tomo 10 del manga de chainsawman (como nuevo). Es del año de edición del 2020. Proviene de la editorial IVREA y cuenta con 192 páginas."),
              10.pv,
              const Text(
                "Detalles del producto",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
              10.pv,
              const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text("Marca"),
                      SizedBox(height: 8),
                      Text("Peso"),
                      SizedBox(height: 8),
                      Text("Formato"),
                      SizedBox(height: 8),
                      Text("Dimensiones"),
                      SizedBox(height: 8),
                      Text("Edicion"),
                      SizedBox(height: 8),
                      Text("Garantia"),
                      SizedBox(height: 8),
                      Text("Numero de paginas"),
                      SizedBox(height: 8),
                      Text("Categoria"),
                    ],
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(
                        "IVREA Argentina",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 8),
                      Text(
                        "0.1777 kg",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 8),
                      Text(
                        "B6",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 8),
                      Text(
                        "17,6 x 25 cm",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 8),
                      Text(
                        "2024",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 8),
                      Text(
                        "1Si",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 8),
                      Text(
                        "196",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 8),
                      Text(
                        "Shonen",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ],
              )
            ],
          ),
        ),
      ],
    );
  }
}
