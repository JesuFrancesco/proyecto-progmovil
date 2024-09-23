//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'distrito.dart';
import 'provincia.dart';
import 'departamento.dart';
import 'account.dart';
import 'shopping_cart.dart';
import 'wishlist.dart';
import 'order.dart';
import 'product_rating.dart';
import 'product_question.dart';
import 'user_notification.dart';
import 'chat_participant.dart';

class User implements ToJson, Id {
  @override
  int? id;
  String? referenceAddress;
  int? distritoId;
  int? provinciaId;
  int? departamentoId;
  Distrito? distrito;
  Provincia? provincia;
  Departamento? departmento;
  Account? account;
  List<ShoppingCart>? shoppingCarts;
  List<Wishlist>? wishlists;
  List<Order>? orders;
  List<ProductRating>? productRatings;
  List<ProductQuestion>? productQuestions;
  List<UserNotification>? userNotifications;
  List<ChatParticipant>? chatParticipants;
  int? accountId;
  int? $shoppingCartsCount;
  int? $wishlistsCount;
  int? $ordersCount;
  int? $productRatingsCount;
  int? $productQuestionsCount;
  int? $userNotificationsCount;
  int? $chatParticipantsCount;

  User({
    this.id,
    this.referenceAddress,
    this.distritoId,
    this.provinciaId,
    this.departamentoId,
    this.distrito,
    this.provincia,
    this.departmento,
    this.account,
    this.shoppingCarts,
    this.wishlists,
    this.orders,
    this.productRatings,
    this.productQuestions,
    this.userNotifications,
    this.chatParticipants,
    this.accountId,
    this.$shoppingCartsCount,
    this.$wishlistsCount,
    this.$ordersCount,
    this.$productRatingsCount,
    this.$productQuestionsCount,
    this.$userNotificationsCount,
    this.$chatParticipantsCount,
  });

  factory User.fromJson(Map<String, dynamic> json) => User(
      id: json['id'] as int?,
      referenceAddress: json['referenceAddress'] as String?,
      distritoId: json['distritoId'] as int?,
      provinciaId: json['provinciaId'] as int?,
      departamentoId: json['departamentoId'] as int?,
      distrito: json['distrito'] != null
          ? Distrito.fromJson(json['distrito'] as Map<String, dynamic>)
          : null,
      provincia: json['provincia'] != null
          ? Provincia.fromJson(json['provincia'] as Map<String, dynamic>)
          : null,
      departmento: json['departmento'] != null
          ? Departamento.fromJson(json['departmento'] as Map<String, dynamic>)
          : null,
      account: json['account'] != null
          ? Account.fromJson(json['account'] as Map<String, dynamic>)
          : null,
      shoppingCarts: json['shoppingCarts'] != null
          ? createModels<ShoppingCart>(
              json['shoppingCarts'], ShoppingCart.fromJson)
          : null,
      wishlists: json['wishlists'] != null
          ? createModels<Wishlist>(json['wishlists'], Wishlist.fromJson)
          : null,
      orders: json['orders'] != null
          ? createModels<Order>(json['orders'], Order.fromJson)
          : null,
      productRatings: json['productRatings'] != null
          ? createModels<ProductRating>(
              json['productRatings'], ProductRating.fromJson)
          : null,
      productQuestions: json['productQuestions'] != null
          ? createModels<ProductQuestion>(
              json['productQuestions'], ProductQuestion.fromJson)
          : null,
      userNotifications: json['userNotifications'] != null
          ? createModels<UserNotification>(
              json['userNotifications'], UserNotification.fromJson)
          : null,
      chatParticipants: json['chatParticipants'] != null
          ? createModels<ChatParticipant>(
              json['chatParticipants'], ChatParticipant.fromJson)
          : null,
      accountId: json['accountId'] as int?,
      $shoppingCartsCount: json['_count']?['shoppingCarts'] as int?,
      $wishlistsCount: json['_count']?['wishlists'] as int?,
      $ordersCount: json['_count']?['orders'] as int?,
      $productRatingsCount: json['_count']?['productRatings'] as int?,
      $productQuestionsCount: json['_count']?['productQuestions'] as int?,
      $userNotificationsCount: json['_count']?['userNotifications'] as int?,
      $chatParticipantsCount: json['_count']?['chatParticipants'] as int?);

  User copyWith({
    int? id,
    String? referenceAddress,
    int? distritoId,
    int? provinciaId,
    int? departamentoId,
    Distrito? distrito,
    Provincia? provincia,
    Departamento? departmento,
    Account? account,
    List<ShoppingCart>? shoppingCarts,
    List<Wishlist>? wishlists,
    List<Order>? orders,
    List<ProductRating>? productRatings,
    List<ProductQuestion>? productQuestions,
    List<UserNotification>? userNotifications,
    List<ChatParticipant>? chatParticipants,
    int? accountId,
    int? $shoppingCartsCount,
    int? $wishlistsCount,
    int? $ordersCount,
    int? $productRatingsCount,
    int? $productQuestionsCount,
    int? $userNotificationsCount,
    int? $chatParticipantsCount,
  }) {
    return User(
        id: id ?? this.id,
        referenceAddress: referenceAddress ?? this.referenceAddress,
        distritoId: distritoId ?? this.distritoId,
        provinciaId: provinciaId ?? this.provinciaId,
        departamentoId: departamentoId ?? this.departamentoId,
        distrito: distrito ?? this.distrito,
        provincia: provincia ?? this.provincia,
        departmento: departmento ?? this.departmento,
        account: account ?? this.account,
        shoppingCarts: shoppingCarts ?? this.shoppingCarts,
        wishlists: wishlists ?? this.wishlists,
        orders: orders ?? this.orders,
        productRatings: productRatings ?? this.productRatings,
        productQuestions: productQuestions ?? this.productQuestions,
        userNotifications: userNotifications ?? this.userNotifications,
        chatParticipants: chatParticipants ?? this.chatParticipants,
        accountId: accountId ?? this.accountId,
        $shoppingCartsCount: $shoppingCartsCount ?? this.$shoppingCartsCount,
        $wishlistsCount: $wishlistsCount ?? this.$wishlistsCount,
        $ordersCount: $ordersCount ?? this.$ordersCount,
        $productRatingsCount: $productRatingsCount ?? this.$productRatingsCount,
        $productQuestionsCount:
            $productQuestionsCount ?? this.$productQuestionsCount,
        $userNotificationsCount:
            $userNotificationsCount ?? this.$userNotificationsCount,
        $chatParticipantsCount:
            $chatParticipantsCount ?? this.$chatParticipantsCount);
  }

  User copyWithInstance(User user) {
    return User(
        id: user.id ?? id,
        referenceAddress: user.referenceAddress ?? referenceAddress,
        distritoId: user.distritoId ?? distritoId,
        provinciaId: user.provinciaId ?? provinciaId,
        departamentoId: user.departamentoId ?? departamentoId,
        distrito: user.distrito ?? distrito,
        provincia: user.provincia ?? provincia,
        departmento: user.departmento ?? departmento,
        account: user.account ?? account,
        shoppingCarts: user.shoppingCarts ?? shoppingCarts,
        wishlists: user.wishlists ?? wishlists,
        orders: user.orders ?? orders,
        productRatings: user.productRatings ?? productRatings,
        productQuestions: user.productQuestions ?? productQuestions,
        userNotifications: user.userNotifications ?? userNotifications,
        chatParticipants: user.chatParticipants ?? chatParticipants,
        accountId: user.accountId ?? accountId,
        $shoppingCartsCount: user.$shoppingCartsCount ?? $shoppingCartsCount,
        $wishlistsCount: user.$wishlistsCount ?? $wishlistsCount,
        $ordersCount: user.$ordersCount ?? $ordersCount,
        $productRatingsCount: user.$productRatingsCount ?? $productRatingsCount,
        $productQuestionsCount:
            user.$productQuestionsCount ?? $productQuestionsCount,
        $userNotificationsCount:
            user.$userNotificationsCount ?? $userNotificationsCount,
        $chatParticipantsCount:
            user.$chatParticipantsCount ?? $chatParticipantsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (referenceAddress != null) 'referenceAddress': referenceAddress,
        if (distritoId != null) 'distritoId': distritoId,
        if (provinciaId != null) 'provinciaId': provinciaId,
        if (departamentoId != null) 'departamentoId': departamentoId,
        if (distrito != null) 'distrito': distrito,
        if (provincia != null) 'provincia': provincia,
        if (departmento != null) 'departmento': departmento,
        if (account != null) 'account': account,
        if (shoppingCarts != null)
          'shoppingCarts': shoppingCarts?.map((item) => item.toJson()).toList(),
        if (wishlists != null)
          'wishlists': wishlists?.map((item) => item.toJson()).toList(),
        if (orders != null)
          'orders': orders?.map((item) => item.toJson()).toList(),
        if (productRatings != null)
          'productRatings':
              productRatings?.map((item) => item.toJson()).toList(),
        if (productQuestions != null)
          'productQuestions':
              productQuestions?.map((item) => item.toJson()).toList(),
        if (userNotifications != null)
          'userNotifications':
              userNotifications?.map((item) => item.toJson()).toList(),
        if (chatParticipants != null)
          'chatParticipants':
              chatParticipants?.map((item) => item.toJson()).toList(),
        if (accountId != null) 'accountId': accountId,
        if ($shoppingCartsCount != null ||
            $wishlistsCount != null ||
            $ordersCount != null ||
            $productRatingsCount != null ||
            $productQuestionsCount != null ||
            $userNotificationsCount != null ||
            $chatParticipantsCount != null)
          '_count': {
            if ($shoppingCartsCount != null)
              'shoppingCarts': $shoppingCartsCount,
            if ($wishlistsCount != null) 'wishlists': $wishlistsCount,
            if ($ordersCount != null) 'orders': $ordersCount,
            if ($productRatingsCount != null)
              'productRatings': $productRatingsCount,
            if ($productQuestionsCount != null)
              'productQuestions': $productQuestionsCount,
            if ($userNotificationsCount != null)
              'userNotifications': $userNotificationsCount,
            if ($chatParticipantsCount != null)
              'chatParticipants': $chatParticipantsCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is User &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          referenceAddress == other.referenceAddress &&
          distritoId == other.distritoId &&
          provinciaId == other.provinciaId &&
          departamentoId == other.departamentoId &&
          distrito == other.distrito &&
          provincia == other.provincia &&
          departmento == other.departmento &&
          account == other.account &&
          areListsEqual(shoppingCarts, other.shoppingCarts) &&
          areListsEqual(wishlists, other.wishlists) &&
          areListsEqual(orders, other.orders) &&
          areListsEqual(productRatings, other.productRatings) &&
          areListsEqual(productQuestions, other.productQuestions) &&
          areListsEqual(userNotifications, other.userNotifications) &&
          areListsEqual(chatParticipants, other.chatParticipants) &&
          accountId == other.accountId &&
          $shoppingCartsCount == other.$shoppingCartsCount &&
          $wishlistsCount == other.$wishlistsCount &&
          $ordersCount == other.$ordersCount &&
          $productRatingsCount == other.$productRatingsCount &&
          $productQuestionsCount == other.$productQuestionsCount &&
          $userNotificationsCount == other.$userNotificationsCount &&
          $chatParticipantsCount == other.$chatParticipantsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      referenceAddress.hashCode ^
      distritoId.hashCode ^
      provinciaId.hashCode ^
      departamentoId.hashCode ^
      distrito.hashCode ^
      provincia.hashCode ^
      departmento.hashCode ^
      account.hashCode ^
      shoppingCarts.hashCode ^
      wishlists.hashCode ^
      orders.hashCode ^
      productRatings.hashCode ^
      productQuestions.hashCode ^
      userNotifications.hashCode ^
      chatParticipants.hashCode ^
      accountId.hashCode ^
      $shoppingCartsCount.hashCode ^
      $wishlistsCount.hashCode ^
      $ordersCount.hashCode ^
      $productRatingsCount.hashCode ^
      $productQuestionsCount.hashCode ^
      $userNotificationsCount.hashCode ^
      $chatParticipantsCount.hashCode;
}
