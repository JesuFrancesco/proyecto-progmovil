//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'product.dart';
import 'client.dart';
import 'question_reply.dart';

class ProductQuestion implements ToJson, Id {
  @override
  int? id;
  String? text;
  DateTime? createdAt;
  int? productId;
  int? clientId;
  Product? product;
  Client? client;
  List<QuestionReply>? questionReplies;
  int? $questionRepliesCount;

  ProductQuestion({
    this.id,
    this.text,
    this.createdAt,
    this.productId,
    this.clientId,
    this.product,
    this.client,
    this.questionReplies,
    this.$questionRepliesCount,
  });

  factory ProductQuestion.fromJson(Map<String, dynamic> json) =>
      ProductQuestion(
          id: json['id'] as int?,
          text: json['text'] as String?,
          createdAt: json['createdAt'] != null
              ? DateTime.parse(json['createdAt'])
              : null,
          productId: json['productId'] as int?,
          clientId: json['clientId'] as int?,
          product: json['product'] != null
              ? Product.fromJson(json['product'] as Map<String, dynamic>)
              : null,
          client: json['client'] != null
              ? Client.fromJson(json['client'] as Map<String, dynamic>)
              : null,
          questionReplies: json['questionReplies'] != null
              ? createModels<QuestionReply>(
                  json['questionReplies'], QuestionReply.fromJson)
              : null,
          $questionRepliesCount: json['_count']?['questionReplies'] as int?);

  ProductQuestion copyWith({
    int? id,
    String? text,
    DateTime? createdAt,
    int? productId,
    int? clientId,
    Product? product,
    Client? client,
    List<QuestionReply>? questionReplies,
    int? $questionRepliesCount,
  }) {
    return ProductQuestion(
        id: id ?? this.id,
        text: text ?? this.text,
        createdAt: createdAt ?? this.createdAt,
        productId: productId ?? this.productId,
        clientId: clientId ?? this.clientId,
        product: product ?? this.product,
        client: client ?? this.client,
        questionReplies: questionReplies ?? this.questionReplies,
        $questionRepliesCount:
            $questionRepliesCount ?? this.$questionRepliesCount);
  }

  ProductQuestion copyWithInstance(ProductQuestion productQuestion) {
    return ProductQuestion(
        id: productQuestion.id ?? id,
        text: productQuestion.text ?? text,
        createdAt: productQuestion.createdAt ?? createdAt,
        productId: productQuestion.productId ?? productId,
        clientId: productQuestion.clientId ?? clientId,
        product: productQuestion.product ?? product,
        client: productQuestion.client ?? client,
        questionReplies: productQuestion.questionReplies ?? questionReplies,
        $questionRepliesCount:
            productQuestion.$questionRepliesCount ?? $questionRepliesCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (text != null) 'text': text,
        if (createdAt != null) 'createdAt': createdAt,
        if (productId != null) 'productId': productId,
        if (clientId != null) 'clientId': clientId,
        if (product != null) 'product': product,
        if (client != null) 'client': client,
        if (questionReplies != null)
          'questionReplies':
              questionReplies?.map((item) => item.toJson()).toList(),
        if ($questionRepliesCount != null)
          '_count': {
            if ($questionRepliesCount != null)
              'questionReplies': $questionRepliesCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ProductQuestion &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          text == other.text &&
          createdAt == other.createdAt &&
          productId == other.productId &&
          clientId == other.clientId &&
          product == other.product &&
          client == other.client &&
          areListsEqual(questionReplies, other.questionReplies) &&
          $questionRepliesCount == other.$questionRepliesCount;

  @override
  int get hashCode =>
      id.hashCode ^
      text.hashCode ^
      createdAt.hashCode ^
      productId.hashCode ^
      clientId.hashCode ^
      product.hashCode ^
      client.hashCode ^
      questionReplies.hashCode ^
      $questionRepliesCount.hashCode;
}
