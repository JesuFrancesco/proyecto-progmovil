//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'product.dart';
import 'user.dart';
import 'question_reply.dart';

class ProductQuestion implements ToJson, Id {
  @override
  int? id;
  String? text;
  DateTime? createdAt;
  int? productId;
  int? userId;
  Product? product;
  User? user;
  List<QuestionReply>? questionReplies;
  int? $questionRepliesCount;

  ProductQuestion({
    this.id,
    this.text,
    this.createdAt,
    this.productId,
    this.userId,
    this.product,
    this.user,
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
          userId: json['userId'] as int?,
          product: json['product'] != null
              ? Product.fromJson(json['product'] as Map<String, dynamic>)
              : null,
          user: json['user'] != null
              ? User.fromJson(json['user'] as Map<String, dynamic>)
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
    int? userId,
    Product? product,
    User? user,
    List<QuestionReply>? questionReplies,
    int? $questionRepliesCount,
  }) {
    return ProductQuestion(
        id: id ?? this.id,
        text: text ?? this.text,
        createdAt: createdAt ?? this.createdAt,
        productId: productId ?? this.productId,
        userId: userId ?? this.userId,
        product: product ?? this.product,
        user: user ?? this.user,
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
        userId: productQuestion.userId ?? userId,
        product: productQuestion.product ?? product,
        user: productQuestion.user ?? user,
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
        if (userId != null) 'userId': userId,
        if (product != null) 'product': product,
        if (user != null) 'user': user,
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
          userId == other.userId &&
          product == other.product &&
          user == other.user &&
          areListsEqual(questionReplies, other.questionReplies) &&
          $questionRepliesCount == other.$questionRepliesCount;

  @override
  int get hashCode =>
      id.hashCode ^
      text.hashCode ^
      createdAt.hashCode ^
      productId.hashCode ^
      userId.hashCode ^
      product.hashCode ^
      user.hashCode ^
      questionReplies.hashCode ^
      $questionRepliesCount.hashCode;
}
