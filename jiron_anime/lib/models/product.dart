//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'market.dart';
import 'brand_seller.dart';
import 'product_attachment.dart';
import 'product_tag.dart';
import 'product_question.dart';
import 'cart_item.dart';
import 'wishlist_item.dart';
import 'order_item.dart';
import 'product_rating.dart';

class Product implements ToJson, Id {
  @override
  int? id;
  String? name;
  int? stock;
  double? price;
  String? dimensions;
  bool? warranty;
  int? discount;
  double? peso;
  String? formato;
  int? anhoEdicion;
  int? numeroPaginas;
  int? marketId;
  Market? market;
  int? brandSellerId;
  BrandSeller? brandSeller;
  List<ProductAttachment>? productAttachments;
  List<ProductTag>? productTags;
  List<ProductQuestion>? productQuestions;
  List<CartItem>? cartItems;
  List<WishlistItem>? wishlistItems;
  List<OrderItem>? orderItems;
  List<ProductRating>? productRatings;
  int? $productAttachmentsCount;
  int? $productTagsCount;
  int? $productQuestionsCount;
  int? $cartItemsCount;
  int? $wishlistItemsCount;
  int? $orderItemsCount;
  int? $productRatingsCount;

  Product({
    this.id,
    this.name,
    this.stock,
    this.price,
    this.dimensions,
    this.warranty,
    this.discount,
    this.peso,
    this.formato,
    this.anhoEdicion,
    this.numeroPaginas,
    this.marketId,
    this.market,
    this.brandSellerId,
    this.brandSeller,
    this.productAttachments,
    this.productTags,
    this.productQuestions,
    this.cartItems,
    this.wishlistItems,
    this.orderItems,
    this.productRatings,
    this.$productAttachmentsCount,
    this.$productTagsCount,
    this.$productQuestionsCount,
    this.$cartItemsCount,
    this.$wishlistItemsCount,
    this.$orderItemsCount,
    this.$productRatingsCount,
  });

  factory Product.fromJson(Map<String, dynamic> json) => Product(
      id: json['id'] as int?,
      name: json['name'] as String?,
      stock: json['stock'] as int?,
      price: double.tryParse(json['price']), // json['price'] as double?,
      dimensions: json['dimensions'] as String?,
      warranty: json['warranty'] as bool?,
      discount: json['discount'] as int?,
      peso: double.tryParse(json['peso']), // json['peso'] as double?,
      formato: json['formato'] as String?,
      anhoEdicion: json['anhoEdicion'] as int?,
      numeroPaginas: json['numeroPaginas'] as int?,
      marketId: json['marketId'] as int?,
      market: json['market'] != null
          ? Market.fromJson(json['market'] as Map<String, dynamic>)
          : null,
      brandSellerId: json['brandSellerId'] as int?,
      brandSeller: json['brandSeller'] != null
          ? BrandSeller.fromJson(json['brandSeller'] as Map<String, dynamic>)
          : null,
      productAttachments: json['productAttachments'] != null
          ? createModels<ProductAttachment>(
              json['productAttachments'], ProductAttachment.fromJson)
          : null,
      productTags: json['productTags'] != null
          ? createModels<ProductTag>(json['productTags'], ProductTag.fromJson)
          : null,
      productQuestions: json['productQuestions'] != null
          ? createModels<ProductQuestion>(
              json['productQuestions'], ProductQuestion.fromJson)
          : null,
      cartItems: json['cartItems'] != null
          ? createModels<CartItem>(json['cartItems'], CartItem.fromJson)
          : null,
      wishlistItems: json['wishlistItems'] != null
          ? createModels<WishlistItem>(
              json['wishlistItems'], WishlistItem.fromJson)
          : null,
      orderItems: json['orderItems'] != null
          ? createModels<OrderItem>(json['orderItems'], OrderItem.fromJson)
          : null,
      productRatings: json['productRatings'] != null
          ? createModels<ProductRating>(
              json['productRatings'], ProductRating.fromJson)
          : null,
      $productAttachmentsCount: json['_count']?['productAttachments'] as int?,
      $productTagsCount: json['_count']?['productTags'] as int?,
      $productQuestionsCount: json['_count']?['productQuestions'] as int?,
      $cartItemsCount: json['_count']?['cartItems'] as int?,
      $wishlistItemsCount: json['_count']?['wishlistItems'] as int?,
      $orderItemsCount: json['_count']?['orderItems'] as int?,
      $productRatingsCount: json['_count']?['productRatings'] as int?);

  Product copyWith({
    int? id,
    String? name,
    int? stock,
    double? price,
    String? dimensions,
    bool? warranty,
    int? discount,
    double? peso,
    String? formato,
    int? anhoEdicion,
    int? numeroPaginas,
    int? marketId,
    Market? market,
    int? brandSellerId,
    BrandSeller? brandSeller,
    List<ProductAttachment>? productAttachments,
    List<ProductTag>? productTags,
    List<ProductQuestion>? productQuestions,
    List<CartItem>? cartItems,
    List<WishlistItem>? wishlistItems,
    List<OrderItem>? orderItems,
    List<ProductRating>? productRatings,
    int? $productAttachmentsCount,
    int? $productTagsCount,
    int? $productQuestionsCount,
    int? $cartItemsCount,
    int? $wishlistItemsCount,
    int? $orderItemsCount,
    int? $productRatingsCount,
  }) {
    return Product(
        id: id ?? this.id,
        name: name ?? this.name,
        stock: stock ?? this.stock,
        price: price ?? this.price,
        dimensions: dimensions ?? this.dimensions,
        warranty: warranty ?? this.warranty,
        discount: discount ?? this.discount,
        peso: peso ?? this.peso,
        formato: formato ?? this.formato,
        anhoEdicion: anhoEdicion ?? this.anhoEdicion,
        numeroPaginas: numeroPaginas ?? this.numeroPaginas,
        marketId: marketId ?? this.marketId,
        market: market ?? this.market,
        brandSellerId: brandSellerId ?? this.brandSellerId,
        brandSeller: brandSeller ?? this.brandSeller,
        productAttachments: productAttachments ?? this.productAttachments,
        productTags: productTags ?? this.productTags,
        productQuestions: productQuestions ?? this.productQuestions,
        cartItems: cartItems ?? this.cartItems,
        wishlistItems: wishlistItems ?? this.wishlistItems,
        orderItems: orderItems ?? this.orderItems,
        productRatings: productRatings ?? this.productRatings,
        $productAttachmentsCount:
            $productAttachmentsCount ?? this.$productAttachmentsCount,
        $productTagsCount: $productTagsCount ?? this.$productTagsCount,
        $productQuestionsCount:
            $productQuestionsCount ?? this.$productQuestionsCount,
        $cartItemsCount: $cartItemsCount ?? this.$cartItemsCount,
        $wishlistItemsCount: $wishlistItemsCount ?? this.$wishlistItemsCount,
        $orderItemsCount: $orderItemsCount ?? this.$orderItemsCount,
        $productRatingsCount:
            $productRatingsCount ?? this.$productRatingsCount);
  }

  Product copyWithInstance(Product product) {
    return Product(
        id: product.id ?? id,
        name: product.name ?? name,
        stock: product.stock ?? stock,
        price: product.price ?? price,
        dimensions: product.dimensions ?? dimensions,
        warranty: product.warranty ?? warranty,
        discount: product.discount ?? discount,
        peso: product.peso ?? peso,
        formato: product.formato ?? formato,
        anhoEdicion: product.anhoEdicion ?? anhoEdicion,
        numeroPaginas: product.numeroPaginas ?? numeroPaginas,
        marketId: product.marketId ?? marketId,
        market: product.market ?? market,
        brandSellerId: product.brandSellerId ?? brandSellerId,
        brandSeller: product.brandSeller ?? brandSeller,
        productAttachments: product.productAttachments ?? productAttachments,
        productTags: product.productTags ?? productTags,
        productQuestions: product.productQuestions ?? productQuestions,
        cartItems: product.cartItems ?? cartItems,
        wishlistItems: product.wishlistItems ?? wishlistItems,
        orderItems: product.orderItems ?? orderItems,
        productRatings: product.productRatings ?? productRatings,
        $productAttachmentsCount:
            product.$productAttachmentsCount ?? $productAttachmentsCount,
        $productTagsCount: product.$productTagsCount ?? $productTagsCount,
        $productQuestionsCount:
            product.$productQuestionsCount ?? $productQuestionsCount,
        $cartItemsCount: product.$cartItemsCount ?? $cartItemsCount,
        $wishlistItemsCount: product.$wishlistItemsCount ?? $wishlistItemsCount,
        $orderItemsCount: product.$orderItemsCount ?? $orderItemsCount,
        $productRatingsCount:
            product.$productRatingsCount ?? $productRatingsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (name != null) 'name': name,
        if (stock != null) 'stock': stock,
        if (price != null) 'price': price,
        if (dimensions != null) 'dimensions': dimensions,
        if (warranty != null) 'warranty': warranty,
        if (discount != null) 'discount': discount,
        if (peso != null) 'peso': peso,
        if (formato != null) 'formato': formato,
        if (anhoEdicion != null) 'anhoEdicion': anhoEdicion,
        if (numeroPaginas != null) 'numeroPaginas': numeroPaginas,
        if (marketId != null) 'marketId': marketId,
        if (market != null) 'market': market,
        if (brandSellerId != null) 'brandSellerId': brandSellerId,
        if (brandSeller != null) 'brandSeller': brandSeller,
        if (productAttachments != null)
          'productAttachments':
              productAttachments?.map((item) => item.toJson()).toList(),
        if (productTags != null)
          'productTags': productTags?.map((item) => item.toJson()).toList(),
        if (productQuestions != null)
          'productQuestions':
              productQuestions?.map((item) => item.toJson()).toList(),
        if (cartItems != null)
          'cartItems': cartItems?.map((item) => item.toJson()).toList(),
        if (wishlistItems != null)
          'wishlistItems': wishlistItems?.map((item) => item.toJson()).toList(),
        if (orderItems != null)
          'orderItems': orderItems?.map((item) => item.toJson()).toList(),
        if (productRatings != null)
          'productRatings':
              productRatings?.map((item) => item.toJson()).toList(),
        if ($productAttachmentsCount != null ||
            $productTagsCount != null ||
            $productQuestionsCount != null ||
            $cartItemsCount != null ||
            $wishlistItemsCount != null ||
            $orderItemsCount != null ||
            $productRatingsCount != null)
          '_count': {
            if ($productAttachmentsCount != null)
              'productAttachments': $productAttachmentsCount,
            if ($productTagsCount != null) 'productTags': $productTagsCount,
            if ($productQuestionsCount != null)
              'productQuestions': $productQuestionsCount,
            if ($cartItemsCount != null) 'cartItems': $cartItemsCount,
            if ($wishlistItemsCount != null)
              'wishlistItems': $wishlistItemsCount,
            if ($orderItemsCount != null) 'orderItems': $orderItemsCount,
            if ($productRatingsCount != null)
              'productRatings': $productRatingsCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Product &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          name == other.name &&
          stock == other.stock &&
          price == other.price &&
          dimensions == other.dimensions &&
          warranty == other.warranty &&
          discount == other.discount &&
          peso == other.peso &&
          formato == other.formato &&
          anhoEdicion == other.anhoEdicion &&
          numeroPaginas == other.numeroPaginas &&
          marketId == other.marketId &&
          market == other.market &&
          brandSellerId == other.brandSellerId &&
          brandSeller == other.brandSeller &&
          areListsEqual(productAttachments, other.productAttachments) &&
          areListsEqual(productTags, other.productTags) &&
          areListsEqual(productQuestions, other.productQuestions) &&
          areListsEqual(cartItems, other.cartItems) &&
          areListsEqual(wishlistItems, other.wishlistItems) &&
          areListsEqual(orderItems, other.orderItems) &&
          areListsEqual(productRatings, other.productRatings) &&
          $productAttachmentsCount == other.$productAttachmentsCount &&
          $productTagsCount == other.$productTagsCount &&
          $productQuestionsCount == other.$productQuestionsCount &&
          $cartItemsCount == other.$cartItemsCount &&
          $wishlistItemsCount == other.$wishlistItemsCount &&
          $orderItemsCount == other.$orderItemsCount &&
          $productRatingsCount == other.$productRatingsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      name.hashCode ^
      stock.hashCode ^
      price.hashCode ^
      dimensions.hashCode ^
      warranty.hashCode ^
      discount.hashCode ^
      peso.hashCode ^
      formato.hashCode ^
      anhoEdicion.hashCode ^
      numeroPaginas.hashCode ^
      marketId.hashCode ^
      market.hashCode ^
      brandSellerId.hashCode ^
      brandSeller.hashCode ^
      productAttachments.hashCode ^
      productTags.hashCode ^
      productQuestions.hashCode ^
      cartItems.hashCode ^
      wishlistItems.hashCode ^
      orderItems.hashCode ^
      productRatings.hashCode ^
      $productAttachmentsCount.hashCode ^
      $productTagsCount.hashCode ^
      $productQuestionsCount.hashCode ^
      $cartItemsCount.hashCode ^
      $wishlistItemsCount.hashCode ^
      $orderItemsCount.hashCode ^
      $productRatingsCount.hashCode;
}
