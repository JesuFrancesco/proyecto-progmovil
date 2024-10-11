import 'package:flutter/material.dart';

Widget loadBeforeRender(bool condition, Widget child) {
  return condition ? const Center(child: CircularProgressIndicator()) : child;
}
