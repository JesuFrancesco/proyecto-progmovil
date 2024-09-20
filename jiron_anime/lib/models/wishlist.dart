//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'user.dart';
import 'wishlist_item.dart';

class Wishlist implements ToJson, Id {
  @override
  int? id;
  int? userId;
  User? user;
  List<WishlistItem>? wishlistItems;
  int? $wishlistItemsCount;

  Wishlist({
    this.id,
    this.userId,
    this.user,
    this.wishlistItems,
    this.$wishlistItemsCount,
  });

  factory Wishlist.fromJson(Map<String, dynamic> json) => Wishlist(
      id: json['id'] as int?,
      userId: json['userId'] as int?,
      user: json['user'] != null
          ? User.fromJson(json['user'] as Map<String, dynamic>)
          : null,
      wishlistItems: json['wishlistItems'] != null
          ? createModels<WishlistItem>(
              json['wishlistItems'], WishlistItem.fromJson)
          : null,
      $wishlistItemsCount: json['_count']?['wishlistItems'] as int?);

  Wishlist copyWith({
    int? id,
    int? userId,
    User? user,
    List<WishlistItem>? wishlistItems,
    int? $wishlistItemsCount,
  }) {
    return Wishlist(
        id: id ?? this.id,
        userId: userId ?? this.userId,
        user: user ?? this.user,
        wishlistItems: wishlistItems ?? this.wishlistItems,
        $wishlistItemsCount: $wishlistItemsCount ?? this.$wishlistItemsCount);
  }

  Wishlist copyWithInstance(Wishlist wishlist) {
    return Wishlist(
        id: wishlist.id ?? id,
        userId: wishlist.userId ?? userId,
        user: wishlist.user ?? user,
        wishlistItems: wishlist.wishlistItems ?? wishlistItems,
        $wishlistItemsCount:
            wishlist.$wishlistItemsCount ?? $wishlistItemsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (userId != null) 'userId': userId,
        if (user != null) 'user': user,
        if (wishlistItems != null)
          'wishlistItems': wishlistItems?.map((item) => item.toJson()).toList(),
        if ($wishlistItemsCount != null)
          '_count': {
            if ($wishlistItemsCount != null)
              'wishlistItems': $wishlistItemsCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Wishlist &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          userId == other.userId &&
          user == other.user &&
          areListsEqual(wishlistItems, other.wishlistItems) &&
          $wishlistItemsCount == other.$wishlistItemsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      userId.hashCode ^
      user.hashCode ^
      wishlistItems.hashCode ^
      $wishlistItemsCount.hashCode;
}
