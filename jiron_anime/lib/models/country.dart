//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'brand_seller.dart';
import 'client.dart';

class Country implements ToJson, Id {
  @override
  int? id;
  String? name;
  String? code;
  List<BrandSeller>? brandSellers;
  List<Client>? Client;
  int? $brandSellersCount;
  int? $ClientCount;

  Country({
    this.id,
    this.name,
    this.code,
    this.brandSellers,
    this.Client,
    this.$brandSellersCount,
    this.$ClientCount,
  });

  factory Country.fromJson(Map<String, dynamic> json) => Country(
      id: json['id'] as int?,
      name: json['name'] as String?,
      code: json['code'] as String?,
      brandSellers: json['brandSellers'] != null
          ? createModels<BrandSeller>(
              json['brandSellers'], BrandSeller.fromJson)
          : null,
      Client: json['Client'] != null
          ? createModels<Client>(json['Client'], Client.fromJson)
          : null,
      $brandSellersCount: json['_count']?['brandSellers'] as int?,
      $ClientCount: json['_count']?['Client'] as int?);

  Country copyWith({
    int? id,
    String? name,
    String? code,
    List<BrandSeller>? brandSellers,
    List<Client>? Client,
    int? $brandSellersCount,
    int? $ClientCount,
  }) {
    return Country(
        id: id ?? this.id,
        name: name ?? this.name,
        code: code ?? this.code,
        brandSellers: brandSellers ?? this.brandSellers,
        Client: Client ?? this.Client,
        $brandSellersCount: $brandSellersCount ?? this.$brandSellersCount,
        $ClientCount: $ClientCount ?? this.$ClientCount);
  }

  Country copyWithInstance(Country country) {
    return Country(
        id: country.id ?? id,
        name: country.name ?? name,
        code: country.code ?? code,
        brandSellers: country.brandSellers ?? brandSellers,
        Client: country.Client ?? Client,
        $brandSellersCount: country.$brandSellersCount ?? $brandSellersCount,
        $ClientCount: country.$ClientCount ?? $ClientCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (name != null) 'name': name,
        if (code != null) 'code': code,
        if (brandSellers != null)
          'brandSellers': brandSellers?.map((item) => item.toJson()).toList(),
        if (Client != null)
          'Client': Client?.map((item) => item.toJson()).toList(),
        if ($brandSellersCount != null || $ClientCount != null)
          '_count': {
            if ($brandSellersCount != null) 'brandSellers': $brandSellersCount,
            if ($ClientCount != null) 'Client': $ClientCount,
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
          areListsEqual(Client, other.Client) &&
          $brandSellersCount == other.$brandSellersCount &&
          $ClientCount == other.$ClientCount;

  @override
  int get hashCode =>
      id.hashCode ^
      name.hashCode ^
      code.hashCode ^
      brandSellers.hashCode ^
      Client.hashCode ^
      $brandSellersCount.hashCode ^
      $ClientCount.hashCode;
}
