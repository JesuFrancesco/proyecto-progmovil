//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'product_rating.dart';

class RatingAttachment implements ToJson {
  String? blobUrl;
  String? filename;
  String? type;
  int? ratingId;
  ProductRating? productRating;

  RatingAttachment({
    this.blobUrl,
    this.filename,
    this.type,
    this.ratingId,
    this.productRating,
  });

  factory RatingAttachment.fromJson(Map<String, dynamic> json) =>
      RatingAttachment(
          blobUrl: json['blobUrl'] as String?,
          filename: json['filename'] as String?,
          type: json['type'] as String?,
          ratingId: json['ratingId'] as int?,
          productRating: json['productRating'] != null
              ? ProductRating.fromJson(
                  json['productRating'] as Map<String, dynamic>)
              : null);

  RatingAttachment copyWith({
    String? blobUrl,
    String? filename,
    String? type,
    int? ratingId,
    ProductRating? productRating,
  }) {
    return RatingAttachment(
        blobUrl: blobUrl ?? this.blobUrl,
        filename: filename ?? this.filename,
        type: type ?? this.type,
        ratingId: ratingId ?? this.ratingId,
        productRating: productRating ?? this.productRating);
  }

  RatingAttachment copyWithInstance(RatingAttachment ratingAttachment) {
    return RatingAttachment(
        blobUrl: ratingAttachment.blobUrl ?? blobUrl,
        filename: ratingAttachment.filename ?? filename,
        type: ratingAttachment.type ?? type,
        ratingId: ratingAttachment.ratingId ?? ratingId,
        productRating: ratingAttachment.productRating ?? productRating);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (blobUrl != null) 'blobUrl': blobUrl,
        if (filename != null) 'filename': filename,
        if (type != null) 'type': type,
        if (ratingId != null) 'ratingId': ratingId,
        if (productRating != null) 'productRating': productRating
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is RatingAttachment &&
          runtimeType == other.runtimeType &&
          blobUrl == other.blobUrl &&
          filename == other.filename &&
          type == other.type &&
          ratingId == other.ratingId &&
          productRating == other.productRating;

  @override
  int get hashCode =>
      blobUrl.hashCode ^
      filename.hashCode ^
      type.hashCode ^
      ratingId.hashCode ^
      productRating.hashCode;
}
