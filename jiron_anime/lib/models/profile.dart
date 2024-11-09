//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'client.dart';
import 'market.dart';
import 'message.dart';

class Profile implements ToJson, IdString {
  @override
  String? id;
  String? email;
  String? phone;
  DateTime? createdAt;
  DateTime? updatedAt;
  Client? client;
  List<Market>? markets;
  List<Message>? messages;
  int? $marketsCount;
  int? $messagesCount;

  Profile({
    this.id,
    this.email,
    this.phone,
    this.createdAt,
    this.updatedAt,
    this.client,
    this.markets,
    this.messages,
    this.$marketsCount,
    this.$messagesCount,
  });

  factory Profile.fromJson(Map<String, dynamic> json) => Profile(
      id: json['id'] as String?,
      email: json['email'] as String?,
      phone: json['phone'] as String?,
      createdAt:
          json['createdAt'] != null ? DateTime.parse(json['createdAt']) : null,
      updatedAt:
          json['updatedAt'] != null ? DateTime.parse(json['updatedAt']) : null,
      client: json['client'] != null
          ? Client.fromJson(json['client'] as Map<String, dynamic>)
          : null,
      markets: json['markets'] != null
          ? createModels<Market>(json['markets'], Market.fromJson)
          : null,
      messages: json['messages'] != null
          ? createModels<Message>(json['messages'], Message.fromJson)
          : null,
      $marketsCount: json['_count']?['markets'] as int?,
      $messagesCount: json['_count']?['messages'] as int?);

  Profile copyWith({
    String? id,
    String? email,
    String? phone,
    DateTime? createdAt,
    DateTime? updatedAt,
    Client? client,
    List<Market>? markets,
    List<Message>? messages,
    int? $marketsCount,
    int? $messagesCount,
  }) {
    return Profile(
        id: id ?? this.id,
        email: email ?? this.email,
        phone: phone ?? this.phone,
        createdAt: createdAt ?? this.createdAt,
        updatedAt: updatedAt ?? this.updatedAt,
        client: client ?? this.client,
        markets: markets ?? this.markets,
        messages: messages ?? this.messages,
        $marketsCount: $marketsCount ?? this.$marketsCount,
        $messagesCount: $messagesCount ?? this.$messagesCount);
  }

  Profile copyWithInstance(Profile profile) {
    return Profile(
        id: profile.id ?? id,
        email: profile.email ?? email,
        phone: profile.phone ?? phone,
        createdAt: profile.createdAt ?? createdAt,
        updatedAt: profile.updatedAt ?? updatedAt,
        client: profile.client ?? client,
        markets: profile.markets ?? markets,
        messages: profile.messages ?? messages,
        $marketsCount: profile.$marketsCount ?? $marketsCount,
        $messagesCount: profile.$messagesCount ?? $messagesCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (email != null) 'email': email,
        if (phone != null) 'phone': phone,
        if (createdAt != null) 'createdAt': createdAt,
        if (updatedAt != null) 'updatedAt': updatedAt,
        if (client != null) 'client': client,
        if (markets != null)
          'markets': markets?.map((item) => item.toJson()).toList(),
        if (messages != null)
          'messages': messages?.map((item) => item.toJson()).toList(),
        if ($marketsCount != null || $messagesCount != null)
          '_count': {
            if ($marketsCount != null) 'markets': $marketsCount,
            if ($messagesCount != null) 'messages': $messagesCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Profile &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          email == other.email &&
          phone == other.phone &&
          createdAt == other.createdAt &&
          updatedAt == other.updatedAt &&
          client == other.client &&
          areListsEqual(markets, other.markets) &&
          areListsEqual(messages, other.messages) &&
          $marketsCount == other.$marketsCount &&
          $messagesCount == other.$messagesCount;

  @override
  int get hashCode =>
      id.hashCode ^
      email.hashCode ^
      phone.hashCode ^
      createdAt.hashCode ^
      updatedAt.hashCode ^
      client.hashCode ^
      markets.hashCode ^
      messages.hashCode ^
      $marketsCount.hashCode ^
      $messagesCount.hashCode;
}
