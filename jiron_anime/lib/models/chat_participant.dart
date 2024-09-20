//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'chat.dart';
import 'user.dart';

class ChatParticipant implements ToJson {
  int? chatId;
  int? userId;
  Chat? chat;
  User? user;

  ChatParticipant({
    this.chatId,
    this.userId,
    this.chat,
    this.user,
  });

  factory ChatParticipant.fromJson(Map<String, dynamic> json) =>
      ChatParticipant(
          chatId: json['chatId'] as int?,
          userId: json['userId'] as int?,
          chat: json['chat'] != null
              ? Chat.fromJson(json['chat'] as Map<String, dynamic>)
              : null,
          user: json['user'] != null
              ? User.fromJson(json['user'] as Map<String, dynamic>)
              : null);

  ChatParticipant copyWith({
    int? chatId,
    int? userId,
    Chat? chat,
    User? user,
  }) {
    return ChatParticipant(
        chatId: chatId ?? this.chatId,
        userId: userId ?? this.userId,
        chat: chat ?? this.chat,
        user: user ?? this.user);
  }

  ChatParticipant copyWithInstance(ChatParticipant chatParticipant) {
    return ChatParticipant(
        chatId: chatParticipant.chatId ?? chatId,
        userId: chatParticipant.userId ?? userId,
        chat: chatParticipant.chat ?? chat,
        user: chatParticipant.user ?? user);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (chatId != null) 'chatId': chatId,
        if (userId != null) 'userId': userId,
        if (chat != null) 'chat': chat,
        if (user != null) 'user': user
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ChatParticipant &&
          runtimeType == other.runtimeType &&
          chatId == other.chatId &&
          userId == other.userId &&
          chat == other.chat &&
          user == other.user;

  @override
  int get hashCode =>
      chatId.hashCode ^ userId.hashCode ^ chat.hashCode ^ user.hashCode;
}
