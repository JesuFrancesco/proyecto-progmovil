//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'brand_seller.dart';

class Country implements ToJson, Id {
  @override
  int? id;
  String? name;
  String? code;
  List<BrandSeller>? brandSellers;
  int? $brandSellersCount;

  Country({
    this.id,
    this.name,
    this.code,
    this.brandSellers,
    this.$brandSellersCount,
  });

  factory Country.fromJson(Map<String, dynamic> json) => Country(
      id: json['id'] as int?,
      name: json['name'] as String?,
      code: json['code'] as String?,
      brandSellers: json['brandSellers'] != null
          ? createModels<BrandSeller>(
              json['brandSellers'], BrandSeller.fromJson)
          : null,
      $brandSellersCount: json['_count']?['brandSellers'] as int?);

  Country copyWith({
    int? id,
    String? name,
    String? code,
    List<BrandSeller>? brandSellers,
    int? $brandSellersCount,
  }) {
    return Country(
        id: id ?? this.id,
        name: name ?? this.name,
        code: code ?? this.code,
        brandSellers: brandSellers ?? this.brandSellers,
        $brandSellersCount: $brandSellersCount ?? this.$brandSellersCount);
  }

  Country copyWithInstance(Country country) {
    return Country(
        id: country.id ?? id,
        name: country.name ?? name,
        code: country.code ?? code,
        brandSellers: country.brandSellers ?? brandSellers,
        $brandSellersCount: country.$brandSellersCount ?? $brandSellersCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (name != null) 'name': name,
        if (code != null) 'code': code,
        if (brandSellers != null)
          'brandSellers': brandSellers?.map((item) => item.toJson()).toList(),
        if ($brandSellersCount != null)
          '_count': {
            if ($brandSellersCount != null) 'brandSellers': $brandSellersCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Country &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          name == other.name &&
          code == other.code &&
          areListsEqual(brandSellers, other.brandSellers) &&
          $brandSellersCount == other.$brandSellersCount;

  @override
  int get hashCode =>
      id.hashCode ^
      name.hashCode ^
      code.hashCode ^
      brandSellers.hashCode ^
      $brandSellersCount.hashCode;
}
