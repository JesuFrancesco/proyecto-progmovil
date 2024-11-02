//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'user.dart';
import 'product.dart';

class Market implements ToJson, Id {
  @override
  int? id;
  String? name;
  String? contactEmail;
  String? contactPhone;
  String? userId;
  User? user;
  List<Product>? products;
  int? $productsCount;

  Market({
    this.id,
    this.name,
    this.contactEmail,
    this.contactPhone,
    this.userId,
    this.user,
    this.products,
    this.$productsCount,
  });

  factory Market.fromJson(Map<String, dynamic> json) => Market(
      id: json['id'] as int?,
      name: json['name'] as String?,
      contactEmail: json['contactEmail'] as String?,
      contactPhone: json['contactPhone'] as String?,
      userId: json['userId'] as String?,
      user: json['user'] != null
          ? User.fromJson(json['user'] as Map<String, dynamic>)
          : null,
      products: json['products'] != null
          ? createModels<Product>(json['products'], Product.fromJson)
          : null,
      $productsCount: json['_count']?['products'] as int?);

  Market copyWith({
    int? id,
    String? name,
    String? contactEmail,
    String? contactPhone,
    String? userId,
    User? user,
    List<Product>? products,
    int? $productsCount,
  }) {
    return Market(
        id: id ?? this.id,
        name: name ?? this.name,
        contactEmail: contactEmail ?? this.contactEmail,
        contactPhone: contactPhone ?? this.contactPhone,
        userId: userId ?? this.userId,
        user: user ?? this.user,
        products: products ?? this.products,
        $productsCount: $productsCount ?? this.$productsCount);
  }

  Market copyWithInstance(Market market) {
    return Market(
        id: market.id ?? id,
        name: market.name ?? name,
        contactEmail: market.contactEmail ?? contactEmail,
        contactPhone: market.contactPhone ?? contactPhone,
        userId: market.userId ?? userId,
        user: market.user ?? user,
        products: market.products ?? products,
        $productsCount: market.$productsCount ?? $productsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (name != null) 'name': name,
        if (contactEmail != null) 'contactEmail': contactEmail,
        if (contactPhone != null) 'contactPhone': contactPhone,
        if (userId != null) 'userId': userId,
        if (user != null) 'user': user,
        if (products != null)
          'products': products?.map((item) => item.toJson()).toList(),
        if ($productsCount != null)
          '_count': {
            if ($productsCount != null) 'products': $productsCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Market &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          name == other.name &&
          contactEmail == other.contactEmail &&
          contactPhone == other.contactPhone &&
          userId == other.userId &&
          user == other.user &&
          areListsEqual(products, other.products) &&
          $productsCount == other.$productsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      name.hashCode ^
      contactEmail.hashCode ^
      contactPhone.hashCode ^
      userId.hashCode ^
      user.hashCode ^
      products.hashCode ^
      $productsCount.hashCode;
}
