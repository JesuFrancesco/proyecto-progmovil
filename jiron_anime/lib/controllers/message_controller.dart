import 'dart:io';
import 'package:get/get.dart';
import 'package:jiron_anime/pages/chat/model/local_message.dart';

class MessageController extends GetxController {
  final messages = <LocalMessage>[].obs;
  final selectedImages = <File>[].obs;

  void sendMessage(LocalMessage message) {
    messages.add(message);
    clearImages();
  }

  void addImage(File image) {
    selectedImages.add(image);
  }

  void removeImage(int index) {
    selectedImages.removeAt(index);
  }

  void clearImages() {
    selectedImages.clear();
  }
}
