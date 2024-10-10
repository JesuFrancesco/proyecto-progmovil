import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/history_orders/history_orders.dart';
import 'package:jiron_anime/pages/home/home_page.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/shared/custom_padding.dart';

class Orders extends StatelessWidget {
  const Orders({super.key});

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
                      MaterialPageRoute(builder: (context) => const HomePage()),
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
                  "PEDIDOS EN PROCESO",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                )
              ],
            ),
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
            15.pv,
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                ElevatedButton(
                  onPressed: () {
                    // Add your button action here
                  },
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.white,
                    backgroundColor: Colors.black,
                  ),
                  child: const Text("CHAT",
                      style: TextStyle(fontWeight: FontWeight.bold)),
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment
                      .center, // Aligns the avatar and text vertically at the center
                  children: [
                    CircleAvatar(
                      child: Text("WA3"),
                    ),
                    SizedBox(
                        width:
                            8), // Adds some space between the CircleAvatar and Text
                    Text(
                      "WAZA1",
                      style:
                          TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                    ),
                  ],
                ),
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
                        height: 150, child: Image.asset("assets/miroirs.jpg")),
                  ],
                ),
              ],
            ),
            15.pv,
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                ElevatedButton(
                  onPressed: () {
                  },
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.white,
                    backgroundColor: Colors.black,
                  ),
                  child: const Text("CHAT",
                      style: TextStyle(fontWeight: FontWeight.bold)),
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment
                      .center, 
                  children: [
                    CircleAvatar(
                      child: Text("WA3"),
                    ),
                    SizedBox(
                        width:
                            8), 
                    Text(
                      "WAZA1",
                      style:
                          TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                    ),
                  ],
                ),
              ],
            ),

            30.pv,

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () {Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(builder: (context) => const HistoryOrders()),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.white,
                    backgroundColor: Colors.black,
                  ),
                  child: const Text("IR AL HISTORIAL",
                      style: TextStyle(fontWeight: FontWeight.bold)),
                ),
              ],
            )

          ],
        ),
      )),
    );
  }
}
