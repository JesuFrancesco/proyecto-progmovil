//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'account.dart';
import 'market_product.dart';

class Market implements ToJson, Id {
  @override
  int? id;
  String? name;
  String? contactEmail;
  String? contactPhone;
  int? accountId;
  Account? account;
  List<MarketProduct>? marketProducts;
  int? $marketProductsCount;

  Market({
    this.id,
    this.name,
    this.contactEmail,
    this.contactPhone,
    this.accountId,
    this.account,
    this.marketProducts,
    this.$marketProductsCount,
  });

  factory Market.fromJson(Map<String, dynamic> json) => Market(
      id: json['id'] as int?,
      name: json['name'] as String?,
      contactEmail: json['contactEmail'] as String?,
      contactPhone: json['contactPhone'] as String?,
      accountId: json['accountId'] as int?,
      account: json['account'] != null
          ? Account.fromJson(json['account'] as Map<String, dynamic>)
          : null,
      marketProducts: json['marketProducts'] != null
          ? createModels<MarketProduct>(
              json['marketProducts'], MarketProduct.fromJson)
          : null,
      $marketProductsCount: json['_count']?['marketProducts'] as int?);

  Market copyWith({
    int? id,
    String? name,
    String? contactEmail,
    String? contactPhone,
    int? accountId,
    Account? account,
    List<MarketProduct>? marketProducts,
    int? $marketProductsCount,
  }) {
    return Market(
        id: id ?? this.id,
        name: name ?? this.name,
        contactEmail: contactEmail ?? this.contactEmail,
        contactPhone: contactPhone ?? this.contactPhone,
        accountId: accountId ?? this.accountId,
        account: account ?? this.account,
        marketProducts: marketProducts ?? this.marketProducts,
        $marketProductsCount:
            $marketProductsCount ?? this.$marketProductsCount);
  }

  Market copyWithInstance(Market market) {
    return Market(
        id: market.id ?? id,
        name: market.name ?? name,
        contactEmail: market.contactEmail ?? contactEmail,
        contactPhone: market.contactPhone ?? contactPhone,
        accountId: market.accountId ?? accountId,
        account: market.account ?? account,
        marketProducts: market.marketProducts ?? marketProducts,
        $marketProductsCount:
            market.$marketProductsCount ?? $marketProductsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (name != null) 'name': name,
        if (contactEmail != null) 'contactEmail': contactEmail,
        if (contactPhone != null) 'contactPhone': contactPhone,
        if (accountId != null) 'accountId': accountId,
        if (account != null) 'account': account,
        if (marketProducts != null)
          'marketProducts':
              marketProducts?.map((item) => item.toJson()).toList(),
        if ($marketProductsCount != null)
          '_count': {
            if ($marketProductsCount != null)
              'marketProducts': $marketProductsCount,
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
          accountId == other.accountId &&
          account == other.account &&
          areListsEqual(marketProducts, other.marketProducts) &&
          $marketProductsCount == other.$marketProductsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      name.hashCode ^
      contactEmail.hashCode ^
      contactPhone.hashCode ^
      accountId.hashCode ^
      account.hashCode ^
      marketProducts.hashCode ^
      $marketProductsCount.hashCode;
}
