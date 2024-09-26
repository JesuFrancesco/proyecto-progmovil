// Copyright 2019 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/theme/fonts.dart';

final appTheme = ThemeData(
  scaffoldBackgroundColor: AppColors.backgroundColor,
  brightness: Brightness.light,
  textTheme: const TextTheme(
    titleLarge: TextStyle(
      fontFamily: AppFonts.primaryFont,
      fontWeight: FontWeight.bold,
      fontSize: 32,
      color: Colors.black,
    ),
  ),
);

final darkAppTheme = ThemeData(
  scaffoldBackgroundColor: Colors.black,
  brightness: Brightness.dark,
  textTheme: const TextTheme(
    titleLarge: TextStyle(
      fontFamily: AppFonts.primaryFont,
      fontWeight: FontWeight.bold,
      fontSize: 32,
      color: Colors.white,
    ),
  ),
);
