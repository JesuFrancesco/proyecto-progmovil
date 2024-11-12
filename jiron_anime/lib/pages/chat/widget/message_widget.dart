import 'package:flutter/material.dart';
import 'package:jiron_anime/pages/chat/model/local_message.dart';

class MessageWidget extends StatelessWidget {
  final LocalMessage message;

  const MessageWidget({super.key, required this.message});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(message.sender!,
          style: const TextStyle(fontWeight: FontWeight.bold)),
      subtitle: Text(message.text),
      trailing: Text(
        "${message.createdAt.hour}:${message.createdAt.minute.toString().padLeft(2, '0')}",
        style: const TextStyle(fontSize: 12),
      ),
    );
  }
}
