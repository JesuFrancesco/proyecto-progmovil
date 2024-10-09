import 'package:flutter/material.dart';
import 'package:jiron_anime/utils/extensions.dart';
//import 'package:jiron_anime/utils/extensions.dart';

class Stock extends StatelessWidget {
  const Stock({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(child: Column(
          children: [Row(
            children: [
              Text("Stock", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20) ,)
            ],
          ),
    10.pv,
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("Stock"),
                SizedBox(height: 8), 
                Text("ECommerce - Delivery"),

          ],
          ),
          
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text("39", style: TextStyle(fontWeight: FontWeight.bold),),
                SizedBox(height: 8), 
                Text("Si", style: TextStyle(fontWeight: FontWeight.bold),),
            ],
          )
          ],)
          
          
          ],
        

        ))
      ],

    );
  }
}