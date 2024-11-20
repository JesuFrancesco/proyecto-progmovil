import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/chat/model/local_message.dart';
import 'package:jiron_anime/shared/auth_controller.dart';

class MessageWidget extends StatelessWidget {
  final LocalMessage message;

  const MessageWidget({super.key, required this.message});

  @override
  Widget build(BuildContext context) {
    final isSender = message.sender == AuthController.fullName;

    return Column(
      crossAxisAlignment:
          isSender ? CrossAxisAlignment.end : CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment:
              isSender ? MainAxisAlignment.end : MainAxisAlignment.start,
          children: [
            Flexible(
              child: Container(
                margin:
                    const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      message.sender!,
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 14,
                      ),
                    ),
                    if (message.text.isNotEmpty)
                      Padding(
                        padding: const EdgeInsets.only(top: 4.0),
                        child: Text(
                          message.text,
                          style: const TextStyle(fontSize: 14),
                        ),
                      ),
                    if (message.images.isNotEmpty)
                      Padding(
                        padding: const EdgeInsets.only(top: 8.0),
                        child: Wrap(
                          spacing: 8.0,
                          runSpacing: 8.0,
                          children: message.images.map((imageFile) {
                            return ClipRRect(
                              borderRadius: BorderRadius.circular(8.0),
                              child: Image.file(
                                imageFile,
                                width: 100,
                                height: 100,
                                fit: BoxFit.contain,
                              ),
                            );
                          }).toList(),
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ],
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0),
          child: Text(
            "${message.createdAt.hour}:${message.createdAt.minute.toString().padLeft(2, '0')}",
            style: const TextStyle(fontSize: 12, color: Colors.grey),
          ),
        ),
        const Divider(),
      ],
    );
  }
}
