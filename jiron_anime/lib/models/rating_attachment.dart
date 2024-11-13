//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'product_rating.dart';

class RatingAttachment implements ToJson {
  int? ratingId;
  String? imageUrl;
  String? filename;
  String? type;
  ProductRating? productRating;

  RatingAttachment({
    this.ratingId,
    this.imageUrl,
    this.filename,
    this.type,
    this.productRating,
  });

  factory RatingAttachment.fromJson(Map<String, dynamic> json) =>
      RatingAttachment(
          ratingId: json['ratingId'] as int?,
          imageUrl: json['imageUrl'] as String?,
          filename: json['filename'] as String?,
          type: json['type'] as String?,
          productRating: json['productRating'] != null
              ? ProductRating.fromJson(
                  json['productRating'] as Map<String, dynamic>)
              : null);

  RatingAttachment copyWith({
    int? ratingId,
    String? imageUrl,
    String? filename,
    String? type,
    ProductRating? productRating,
  }) {
    return RatingAttachment(
        ratingId: ratingId ?? this.ratingId,
        imageUrl: imageUrl ?? this.imageUrl,
        filename: filename ?? this.filename,
        type: type ?? this.type,
        productRating: productRating ?? this.productRating);
  }

  RatingAttachment copyWithInstance(RatingAttachment ratingAttachment) {
    return RatingAttachment(
        ratingId: ratingAttachment.ratingId ?? ratingId,
        imageUrl: ratingAttachment.imageUrl ?? imageUrl,
        filename: ratingAttachment.filename ?? filename,
        type: ratingAttachment.type ?? type,
        productRating: ratingAttachment.productRating ?? productRating);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (ratingId != null) 'ratingId': ratingId,
        if (imageUrl != null) 'imageUrl': imageUrl,
        if (filename != null) 'filename': filename,
        if (type != null) 'type': type,
        if (productRating != null) 'productRating': productRating
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is RatingAttachment &&
          runtimeType == other.runtimeType &&
          ratingId == other.ratingId &&
          imageUrl == other.imageUrl &&
          filename == other.filename &&
          type == other.type &&
          productRating == other.productRating;

  @override
  int get hashCode =>
      ratingId.hashCode ^
      imageUrl.hashCode ^
      filename.hashCode ^
      type.hashCode ^
      productRating.hashCode;
}
