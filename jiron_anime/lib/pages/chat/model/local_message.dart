import 'dart:io';

class LocalMessage {
  final String? sender;
  final String text;
  final DateTime createdAt;
  final List<File> images;

  LocalMessage({
    this.sender,
    required this.text,
    required this.createdAt,
    this.images = const [],
  });
}
