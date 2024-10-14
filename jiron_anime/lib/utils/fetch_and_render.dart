import 'package:flutter/material.dart';

Widget fetchAndRender<T>(
    Future<T> Function() fetchDataFunc, Widget successWidget) {
  return FutureBuilder<T>(
    future: fetchDataFunc(),
    builder: (BuildContext context, AsyncSnapshot<T> snapshot) {
      if (snapshot.connectionState == ConnectionState.waiting) {
        return const Center(child: CircularProgressIndicator());
      } else if (snapshot.hasError) {
        return Center(child: Text('Error: ${snapshot.error}'));
      } else {
        return successWidget;
      }
    },
  );
}
