//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'shopping_cart.dart';
import 'product.dart';

class CartItem implements ToJson {
  int? amount;
  DateTime? addedAt;
  int? cartId;
  int? productId;
  ShoppingCart? shoppingCart;
  Product? product;

  CartItem({
    this.amount,
    this.addedAt,
    this.cartId,
    this.productId,
    this.shoppingCart,
    this.product,
  });

  factory CartItem.fromJson(Map<String, dynamic> json) => CartItem(
      amount: json['amount'] as int?,
      addedAt: json['addedAt'] != null ? DateTime.parse(json['addedAt']) : null,
      cartId: json['cartId'] as int?,
      productId: json['productId'] as int?,
      shoppingCart: json['shoppingCart'] != null
          ? ShoppingCart.fromJson(json['shoppingCart'] as Map<String, dynamic>)
          : null,
      product: json['product'] != null
          ? Product.fromJson(json['product'] as Map<String, dynamic>)
          : null);

  CartItem copyWith({
    int? amount,
    DateTime? addedAt,
    int? cartId,
    int? productId,
    ShoppingCart? shoppingCart,
    Product? product,
  }) {
    return CartItem(
        amount: amount ?? this.amount,
        addedAt: addedAt ?? this.addedAt,
        cartId: cartId ?? this.cartId,
        productId: productId ?? this.productId,
        shoppingCart: shoppingCart ?? this.shoppingCart,
        product: product ?? this.product);
  }

  CartItem copyWithInstance(CartItem cartItem) {
    return CartItem(
        amount: cartItem.amount ?? amount,
        addedAt: cartItem.addedAt ?? addedAt,
        cartId: cartItem.cartId ?? cartId,
        productId: cartItem.productId ?? productId,
        shoppingCart: cartItem.shoppingCart ?? shoppingCart,
        product: cartItem.product ?? product);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (amount != null) 'amount': amount,
        if (addedAt != null) 'addedAt': addedAt,
        if (cartId != null) 'cartId': cartId,
        if (productId != null) 'productId': productId,
        if (shoppingCart != null) 'shoppingCart': shoppingCart,
        if (product != null) 'product': product
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is CartItem &&
          runtimeType == other.runtimeType &&
          amount == other.amount &&
          addedAt == other.addedAt &&
          cartId == other.cartId &&
          productId == other.productId &&
          shoppingCart == other.shoppingCart &&
          product == other.product;

  @override
  int get hashCode =>
      amount.hashCode ^
      addedAt.hashCode ^
      cartId.hashCode ^
      productId.hashCode ^
      shoppingCart.hashCode ^
      product.hashCode;
}
