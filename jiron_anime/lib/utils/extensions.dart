import 'package:flutter/material.dart';

extension SizedBoxGeneratedByNum on num{
  Widget get ph => SizedBox( width: this.toDouble(),);
  Widget get pv => SizedBox( height: this.toDouble(),);
}