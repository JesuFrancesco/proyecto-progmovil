import 'dart:io';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';
import 'package:jiron_anime/controllers/message_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/chat/model/local_message.dart';
import 'package:jiron_anime/pages/chat/widget/message_widget.dart';
import 'package:jiron_anime/shared/auth_controller.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';

class ChatPage extends StatelessWidget {
  final Market mercado;
  final MessageController messageController = Get.put(MessageController());
  final TextEditingController messageControllerInput = TextEditingController();

  ChatPage({super.key, required this.mercado});

  Future<void> _pickImage() async {
    final picker = ImagePicker();
    final pickedFiles = await picker.pickMultiImage();
    for (final pickedFile in pickedFiles) {
      messageController.addImage(File(pickedFile.path));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomLayout(
        child: Column(
          children: [
            const CustomAppbar(title: "Chat"),
            Text(
              mercado.name!,
              style: Theme.of(context).textTheme.titleSmall,
            ),
            Expanded(
              child: Obx(() => ListView.builder(
                    itemCount: messageController.messages.length,
                    itemBuilder: (context, index) {
                      final message = messageController.messages[index];
                      return MessageWidget(message: message);
                    },
                  )),
            ),
            Obx(() {
              return Column(
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
                                icon:
                                    const Icon(Icons.close, color: Colors.red),
                                onPressed: () =>
                                    messageController.removeImage(index),
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
                          onPressed: _pickImage,
                        ),
                        IconButton(
                          icon: const Icon(Icons.send),
                          onPressed: () {
                            if (messageControllerInput.text.isNotEmpty ||
                                messageController.selectedImages.isNotEmpty) {
                              messageController.sendMessage(LocalMessage(
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
              );
            }),
          ],
        ),
      ),
    );
  }
}
