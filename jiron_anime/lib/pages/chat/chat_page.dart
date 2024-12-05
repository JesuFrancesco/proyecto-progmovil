import 'dart:io';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';
import 'package:jiron_anime/controllers/message_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/models/local_message.dart';
import 'package:jiron_anime/pages/chat/widget/message_widget.dart';
import 'package:jiron_anime/shared/auth_controller.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/shared/small_circular_indicator.dart';

class ChatPage extends StatelessWidget {
  final Market mercado;
  const ChatPage({super.key, required this.mercado});

  @override
  Widget build(BuildContext context) {
    final messageController = Get.put(MessageController());
    final messageControllerInput = TextEditingController();

    Future<void> aniadirImagenes() async {
      final picker = ImagePicker();
      final pickedFiles = await picker.pickMultiImage();
      for (final pickedFile in pickedFiles) {
        messageController.agregarImagen(File(pickedFile.path));
      }
    }

    return Scaffold(
      body: CustomLayout(
        child: Column(
          children: [
            const CustomAppbar(title: "Chat"),
            Text(
              mercado.name!,
              style: Theme.of(context).textTheme.titleSmall,
            ),
            // CHAT MESSAGES
            FutureBuilder<void>(
              future: messageController.cargarHistorial(),
              builder: (context, snapshot) => Obx(
                () => Expanded(
                  child: messageController.isLoading.value
                      ? const Center(child: SmallCircularIndicator())
                      : messageController.messages.isEmpty
                          ? Center(
                              child:
                                  Text("Empieza tu chat con ${mercado.name!}"))
                          : ListView.builder(
                              itemCount: messageController.messages.length,
                              itemBuilder: (context, index) {
                                final message =
                                    messageController.messages[index];
                                return MessageWidget(message: message);
                              },
                            ),
                ),
              ),
            ),
            // CHAT INPUT
            Obx(() => Column(
                  children: [
                    if (messageController.selectedImages.isNotEmpty)
                      SizedBox(
                        height: 100,
                        child: ListView.builder(
                          scrollDirection: Axis.horizontal,
                          itemCount: messageController.selectedImages.length,
                          itemBuilder: (context, index) {
                            final imageFile =
                                messageController.selectedImages[index];
                            return Stack(
                              alignment: Alignment.topRight,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Image.file(imageFile,
                                      width: 100, height: 100),
                                ),
                                IconButton(
                                  icon: const Icon(Icons.close,
                                      color: Colors.red),
                                  onPressed: () =>
                                      messageController.quitarImagen(index),
                                ),
                              ],
                            );
                          },
                        ),
                      ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Row(
                        children: [
                          Expanded(
                            child: TextFormField(
                              controller: messageControllerInput,
                              minLines: 1,
                              maxLines: null,
                              decoration: const InputDecoration(
                                labelText: 'Envía tu mensaje',
                                border: OutlineInputBorder(),
                                contentPadding: EdgeInsets.symmetric(
                                  vertical: 10,
                                  horizontal: 15,
                                ),
                              ),
                            ),
                          ),
                          IconButton(
                            icon: const Icon(Icons.photo),
                            onPressed: aniadirImagenes,
                          ),
                          IconButton(
                            icon: const Icon(Icons.send),
                            onPressed: () {
                              if (messageControllerInput.text.isNotEmpty ||
                                  messageController.selectedImages.isNotEmpty) {
                                messageController.enviarMensaje(LocalMessage(
                                    sender: AuthController.fullName,
                                    text: messageControllerInput.text,
                                    createdAt: DateTime.now(),
                                    images: messageController.selectedImages
                                        .toList()));

                                messageControllerInput.clear();
                              }
                            },
                          ),
                        ],
                      ),
                    ),
                  ],
                )),
          ],
        ),
      ),
    );
  }
}
