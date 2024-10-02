import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../store_controller.dart';

SearchTxtController searchController = Get.put(SearchTxtController());

Widget searchProductsAndMarketsDemo(BuildContext context) {
  return SingleChildScrollView(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        const Text('Búsqueda'),
        TextField(
          controller: searchController.txtSearch,
        )
      ],
    ),
  );
}
