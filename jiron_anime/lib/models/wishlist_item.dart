//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'wishlist.dart';
import 'product.dart';

class WishlistItem implements ToJson {
  DateTime? addedAt;
  int? wishlistId;
  int? productId;
  Wishlist? wishlist;
  Product? product;

  WishlistItem({
    this.addedAt,
    this.wishlistId,
    this.productId,
    this.wishlist,
    this.product,
  });

  factory WishlistItem.fromJson(Map<String, dynamic> json) => WishlistItem(
      addedAt: json['addedAt'] != null ? DateTime.parse(json['addedAt']) : null,
      wishlistId: json['wishlistId'] as int?,
      productId: json['productId'] as int?,
      wishlist: json['wishlist'] != null
          ? Wishlist.fromJson(json['wishlist'] as Map<String, dynamic>)
          : null,
      product: json['product'] != null
          ? Product.fromJson(json['product'] as Map<String, dynamic>)
          : null);

  WishlistItem copyWith({
    DateTime? addedAt,
    int? wishlistId,
    int? productId,
    Wishlist? wishlist,
    Product? product,
  }) {
    return WishlistItem(
        addedAt: addedAt ?? this.addedAt,
        wishlistId: wishlistId ?? this.wishlistId,
        productId: productId ?? this.productId,
        wishlist: wishlist ?? this.wishlist,
        product: product ?? this.product);
  }

  WishlistItem copyWithInstance(WishlistItem wishlistItem) {
    return WishlistItem(
        addedAt: wishlistItem.addedAt ?? addedAt,
        wishlistId: wishlistItem.wishlistId ?? wishlistId,
        productId: wishlistItem.productId ?? productId,
        wishlist: wishlistItem.wishlist ?? wishlist,
        product: wishlistItem.product ?? product);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (addedAt != null) 'addedAt': addedAt,
        if (wishlistId != null) 'wishlistId': wishlistId,
        if (productId != null) 'productId': productId,
        if (wishlist != null) 'wishlist': wishlist,
        if (product != null) 'product': product
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is WishlistItem &&
          runtimeType == other.runtimeType &&
          addedAt == other.addedAt &&
          wishlistId == other.wishlistId &&
          productId == other.productId &&
          wishlist == other.wishlist &&
          product == other.product;

  @override
  int get hashCode =>
      addedAt.hashCode ^
      wishlistId.hashCode ^
      productId.hashCode ^
      wishlist.hashCode ^
      product.hashCode;
}
