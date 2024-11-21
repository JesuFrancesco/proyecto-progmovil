import 'dart:io';
import 'package:get/get.dart';
import 'package:jiron_anime/pages/chat/model/local_message.dart';

class MessageController extends GetxController {
  // final service = MessageService();

  final isLoading = false.obs;
  final messages = <LocalMessage>[].obs;
  final selectedImages = <File>[].obs;

  void cargarHistorial() async {
    try {
      isLoading.value = true;
      await Future.delayed(const Duration(seconds: 5));
    } catch (e) {
      // handle errors
    } finally {
      isLoading.value = false;
    }
  }

  void enviarMensaje(LocalMessage message) async {
    messages.add(message);
    limpiarImagenes();
  }

  void agregarImagen(File image) async {
    selectedImages.add(image);
  }

  void quitarImagen(int index) async {
    selectedImages.removeAt(index);
  }

  void limpiarImagenes() async {
    selectedImages.clear();
  }
}
