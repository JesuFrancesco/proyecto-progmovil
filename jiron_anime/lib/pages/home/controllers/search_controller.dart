import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SearchTxtController extends GetxController {
  TextEditingController txtSearch = TextEditingController();
  RxString busqueda = ''.obs;
}
