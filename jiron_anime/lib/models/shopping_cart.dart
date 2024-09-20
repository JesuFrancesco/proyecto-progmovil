//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'user.dart';
import 'cart_item.dart';

class ShoppingCart implements ToJson, Id {
  @override
  int? id;
  int? userId;
  User? user;
  List<CartItem>? cartItems;
  int? $cartItemsCount;

  ShoppingCart({
    this.id,
    this.userId,
    this.user,
    this.cartItems,
    this.$cartItemsCount,
  });

  factory ShoppingCart.fromJson(Map<String, dynamic> json) => ShoppingCart(
      id: json['id'] as int?,
      userId: json['userId'] as int?,
      user: json['user'] != null
          ? User.fromJson(json['user'] as Map<String, dynamic>)
          : null,
      cartItems: json['cartItems'] != null
          ? createModels<CartItem>(json['cartItems'], CartItem.fromJson)
          : null,
      $cartItemsCount: json['_count']?['cartItems'] as int?);

  ShoppingCart copyWith({
    int? id,
    int? userId,
    User? user,
    List<CartItem>? cartItems,
    int? $cartItemsCount,
  }) {
    return ShoppingCart(
        id: id ?? this.id,
        userId: userId ?? this.userId,
        user: user ?? this.user,
        cartItems: cartItems ?? this.cartItems,
        $cartItemsCount: $cartItemsCount ?? this.$cartItemsCount);
  }

  ShoppingCart copyWithInstance(ShoppingCart shoppingCart) {
    return ShoppingCart(
        id: shoppingCart.id ?? id,
        userId: shoppingCart.userId ?? userId,
        user: shoppingCart.user ?? user,
        cartItems: shoppingCart.cartItems ?? cartItems,
        $cartItemsCount: shoppingCart.$cartItemsCount ?? $cartItemsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (userId != null) 'userId': userId,
        if (user != null) 'user': user,
        if (cartItems != null)
          'cartItems': cartItems?.map((item) => item.toJson()).toList(),
        if ($cartItemsCount != null)
          '_count': {
            if ($cartItemsCount != null) 'cartItems': $cartItemsCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ShoppingCart &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          userId == other.userId &&
          user == other.user &&
          areListsEqual(cartItems, other.cartItems) &&
          $cartItemsCount == other.$cartItemsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      userId.hashCode ^
      user.hashCode ^
      cartItems.hashCode ^
      $cartItemsCount.hashCode;
}
