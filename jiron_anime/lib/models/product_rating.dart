//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'user.dart';
import 'product.dart';
import 'rating_attachment.dart';

class ProductRating implements ToJson, Id {
  @override
  int? id;
  int? score;
  String? text;
  DateTime? createdAt;
  int? userId;
  int? productId;
  User? user;
  Product? product;
  List<RatingAttachment>? ratingAttachments;
  int? $ratingAttachmentsCount;

  ProductRating({
    this.id,
    this.score,
    this.text,
    this.createdAt,
    this.userId,
    this.productId,
    this.user,
    this.product,
    this.ratingAttachments,
    this.$ratingAttachmentsCount,
  });

  factory ProductRating.fromJson(Map<String, dynamic> json) => ProductRating(
      id: json['id'] as int?,
      score: json['score'] as int?,
      text: json['text'] as String?,
      createdAt:
          json['createdAt'] != null ? DateTime.parse(json['createdAt']) : null,
      userId: json['userId'] as int?,
      productId: json['productId'] as int?,
      user: json['user'] != null
          ? User.fromJson(json['user'] as Map<String, dynamic>)
          : null,
      product: json['product'] != null
          ? Product.fromJson(json['product'] as Map<String, dynamic>)
          : null,
      ratingAttachments: json['ratingAttachments'] != null
          ? createModels<RatingAttachment>(
              json['ratingAttachments'], RatingAttachment.fromJson)
          : null,
      $ratingAttachmentsCount: json['_count']?['ratingAttachments'] as int?);

  ProductRating copyWith({
    int? id,
    int? score,
    String? text,
    DateTime? createdAt,
    int? userId,
    int? productId,
    User? user,
    Product? product,
    List<RatingAttachment>? ratingAttachments,
    int? $ratingAttachmentsCount,
  }) {
    return ProductRating(
        id: id ?? this.id,
        score: score ?? this.score,
        text: text ?? this.text,
        createdAt: createdAt ?? this.createdAt,
        userId: userId ?? this.userId,
        productId: productId ?? this.productId,
        user: user ?? this.user,
        product: product ?? this.product,
        ratingAttachments: ratingAttachments ?? this.ratingAttachments,
        $ratingAttachmentsCount:
            $ratingAttachmentsCount ?? this.$ratingAttachmentsCount);
  }

  ProductRating copyWithInstance(ProductRating productRating) {
    return ProductRating(
        id: productRating.id ?? id,
        score: productRating.score ?? score,
        text: productRating.text ?? text,
        createdAt: productRating.createdAt ?? createdAt,
        userId: productRating.userId ?? userId,
        productId: productRating.productId ?? productId,
        user: productRating.user ?? user,
        product: productRating.product ?? product,
        ratingAttachments: productRating.ratingAttachments ?? ratingAttachments,
        $ratingAttachmentsCount:
            productRating.$ratingAttachmentsCount ?? $ratingAttachmentsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (score != null) 'score': score,
        if (text != null) 'text': text,
        if (createdAt != null) 'createdAt': createdAt,
        if (userId != null) 'userId': userId,
        if (productId != null) 'productId': productId,
        if (user != null) 'user': user,
        if (product != null) 'product': product,
        if (ratingAttachments != null)
          'ratingAttachments':
              ratingAttachments?.map((item) => item.toJson()).toList(),
        if ($ratingAttachmentsCount != null)
          '_count': {
            if ($ratingAttachmentsCount != null)
              'ratingAttachments': $ratingAttachmentsCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ProductRating &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          score == other.score &&
          text == other.text &&
          createdAt == other.createdAt &&
          userId == other.userId &&
          productId == other.productId &&
          user == other.user &&
          product == other.product &&
          areListsEqual(ratingAttachments, other.ratingAttachments) &&
          $ratingAttachmentsCount == other.$ratingAttachmentsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      score.hashCode ^
      text.hashCode ^
      createdAt.hashCode ^
      userId.hashCode ^
      productId.hashCode ^
      user.hashCode ^
      product.hashCode ^
      ratingAttachments.hashCode ^
      $ratingAttachmentsCount.hashCode;
}