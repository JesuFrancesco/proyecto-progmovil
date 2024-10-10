import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/orders/orders.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/shared/custom_padding.dart';

class HistoryOrders extends StatelessWidget {
  const HistoryOrders({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomPadding(
          child: SingleChildScrollView(
        child: Column(
          children: [
            kToolbarHeight.pv,
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                IconButton(
                  icon: const Icon(Icons.arrow_back),
                  onPressed: () {
                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(builder: (context) => const Orders()),
                    );
                  },
                ),
                Text(
                  "PEDIDOS",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                ),
                CircleAvatar(
                  child: Text("WA3"),
                ),
              ],
            ),
            15.pv,
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "PEDIDOS REALIZADOS",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                )
              ],
            ),

            15.pv,

            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Text(
                  "JULIO 2024",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                )
              ],
            ),

            15.pv,

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Pedido realizado el: 23/7/2024"),
                    SizedBox(height: 8),
                    Text("Pedido: SOIFAMIFSM"),
                    SizedBox(height: 8),
                    Text("Articulo: 1"),
                    SizedBox(height: 8),
                    Text("Total: S. 41.00"),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    SizedBox(
                        height: 150,
                        child: Image.asset("assets/frieren01.jpg")),
                  ],
                ),
              ],
            ),

            10.pv,

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Pedido realizado el: 23/7/2024"),
                    SizedBox(height: 8),
                    Text("Pedido: SOIFAMIFSM"),
                    SizedBox(height: 8),
                    Text("Articulo: 1"),
                    SizedBox(height: 8),
                    Text("Total: S. 41.00"),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    SizedBox(
                        height: 150,
                        child: Image.asset("assets/chainsawman01.jpg")),
                  ],
                ),
              ],
            ),


            15.pv,

            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Text(
                  "JUNIO 2024",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                )
              ],
            ),

            15.pv,

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Pedido realizado el: 23/7/2024"),
                    SizedBox(height: 8),
                    Text("Pedido: SOIFAMIFSM"),
                    SizedBox(height: 8),
                    Text("Articulo: 1"),
                    SizedBox(height: 8),
                    Text("Total: S. 41.00"),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    SizedBox(
                        height: 150,
                        child: Image.asset("assets/chainsawman10.jpg")),
                  ],
                ),
              ],
            ),

            10.pv,

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Pedido realizado el: 23/7/2024"),
                    SizedBox(height: 8),
                    Text("Pedido: SOIFAMIFSM"),
                    SizedBox(height: 8),
                    Text("Articulo: 1"),
                    SizedBox(height: 8),
                    Text("Total: S. 41.00"),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    SizedBox(
                        height: 150,
                        child: Image.asset("assets/deathnote04.jpg")),
                  ],
                ),
              ],
            ),
            
              ],
            )
        ),
      )
    );
  }
}
