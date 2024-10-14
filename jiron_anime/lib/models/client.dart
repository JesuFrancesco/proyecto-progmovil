//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'distrito.dart';
import 'provincia.dart';
import 'departamento.dart';
import 'user.dart';
import 'shopping_cart.dart';
import 'wishlist.dart';
import 'order.dart';
import 'product_rating.dart';
import 'product_question.dart';
import 'client_notification.dart';
import 'chat_participant.dart';

class Client implements ToJson, Id {
  @override
  int? id;
  String? referenceAddress;
  int? distritoId;
  int? provinciaId;
  int? departamentoId;
  Distrito? distrito;
  Provincia? provincia;
  Departamento? departmento;
  User? user;
  List<ShoppingCart>? shoppingCarts;
  List<Wishlist>? wishlists;
  List<Order>? orders;
  List<ProductRating>? productRatings;
  List<ProductQuestion>? productQuestions;
  List<ClientNotification>? clientNotifications;
  List<ChatParticipant>? chatParticipants;
  String? userId;
  int? $shoppingCartsCount;
  int? $wishlistsCount;
  int? $ordersCount;
  int? $productRatingsCount;
  int? $productQuestionsCount;
  int? $clientNotificationsCount;
  int? $chatParticipantsCount;

  Client({
    this.id,
    this.referenceAddress,
    this.distritoId,
    this.provinciaId,
    this.departamentoId,
    this.distrito,
    this.provincia,
    this.departmento,
    this.user,
    this.shoppingCarts,
    this.wishlists,
    this.orders,
    this.productRatings,
    this.productQuestions,
    this.clientNotifications,
    this.chatParticipants,
    this.userId,
    this.$shoppingCartsCount,
    this.$wishlistsCount,
    this.$ordersCount,
    this.$productRatingsCount,
    this.$productQuestionsCount,
    this.$clientNotificationsCount,
    this.$chatParticipantsCount,
  });

  factory Client.fromJson(Map<String, dynamic> json) => Client(
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
      user: json['user'] != null
          ? User.fromJson(json['user'] as Map<String, dynamic>)
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
      clientNotifications: json['clientNotifications'] != null
          ? createModels<ClientNotification>(
              json['clientNotifications'], ClientNotification.fromJson)
          : null,
      chatParticipants: json['chatParticipants'] != null
          ? createModels<ChatParticipant>(
              json['chatParticipants'], ChatParticipant.fromJson)
          : null,
      userId: json['userId'] as String?,
      $shoppingCartsCount: json['_count']?['shoppingCarts'] as int?,
      $wishlistsCount: json['_count']?['wishlists'] as int?,
      $ordersCount: json['_count']?['orders'] as int?,
      $productRatingsCount: json['_count']?['productRatings'] as int?,
      $productQuestionsCount: json['_count']?['productQuestions'] as int?,
      $clientNotificationsCount: json['_count']?['clientNotifications'] as int?,
      $chatParticipantsCount: json['_count']?['chatParticipants'] as int?);

  Client copyWith({
    int? id,
    String? referenceAddress,
    int? distritoId,
    int? provinciaId,
    int? departamentoId,
    Distrito? distrito,
    Provincia? provincia,
    Departamento? departmento,
    User? user,
    List<ShoppingCart>? shoppingCarts,
    List<Wishlist>? wishlists,
    List<Order>? orders,
    List<ProductRating>? productRatings,
    List<ProductQuestion>? productQuestions,
    List<ClientNotification>? clientNotifications,
    List<ChatParticipant>? chatParticipants,
    String? userId,
    int? $shoppingCartsCount,
    int? $wishlistsCount,
    int? $ordersCount,
    int? $productRatingsCount,
    int? $productQuestionsCount,
    int? $clientNotificationsCount,
    int? $chatParticipantsCount,
  }) {
    return Client(
        id: id ?? this.id,
        referenceAddress: referenceAddress ?? this.referenceAddress,
        distritoId: distritoId ?? this.distritoId,
        provinciaId: provinciaId ?? this.provinciaId,
        departamentoId: departamentoId ?? this.departamentoId,
        distrito: distrito ?? this.distrito,
        provincia: provincia ?? this.provincia,
        departmento: departmento ?? this.departmento,
        user: user ?? this.user,
        shoppingCarts: shoppingCarts ?? this.shoppingCarts,
        wishlists: wishlists ?? this.wishlists,
        orders: orders ?? this.orders,
        productRatings: productRatings ?? this.productRatings,
        productQuestions: productQuestions ?? this.productQuestions,
        clientNotifications: clientNotifications ?? this.clientNotifications,
        chatParticipants: chatParticipants ?? this.chatParticipants,
        userId: userId ?? this.userId,
        $shoppingCartsCount: $shoppingCartsCount ?? this.$shoppingCartsCount,
        $wishlistsCount: $wishlistsCount ?? this.$wishlistsCount,
        $ordersCount: $ordersCount ?? this.$ordersCount,
        $productRatingsCount: $productRatingsCount ?? this.$productRatingsCount,
        $productQuestionsCount:
            $productQuestionsCount ?? this.$productQuestionsCount,
        $clientNotificationsCount:
            $clientNotificationsCount ?? this.$clientNotificationsCount,
        $chatParticipantsCount:
            $chatParticipantsCount ?? this.$chatParticipantsCount);
  }

  Client copyWithInstance(Client client) {
    return Client(
        id: client.id ?? id,
        referenceAddress: client.referenceAddress ?? referenceAddress,
        distritoId: client.distritoId ?? distritoId,
        provinciaId: client.provinciaId ?? provinciaId,
        departamentoId: client.departamentoId ?? departamentoId,
        distrito: client.distrito ?? distrito,
        provincia: client.provincia ?? provincia,
        departmento: client.departmento ?? departmento,
        user: client.user ?? user,
        shoppingCarts: client.shoppingCarts ?? shoppingCarts,
        wishlists: client.wishlists ?? wishlists,
        orders: client.orders ?? orders,
        productRatings: client.productRatings ?? productRatings,
        productQuestions: client.productQuestions ?? productQuestions,
        clientNotifications: client.clientNotifications ?? clientNotifications,
        chatParticipants: client.chatParticipants ?? chatParticipants,
        userId: client.userId ?? userId,
        $shoppingCartsCount: client.$shoppingCartsCount ?? $shoppingCartsCount,
        $wishlistsCount: client.$wishlistsCount ?? $wishlistsCount,
        $ordersCount: client.$ordersCount ?? $ordersCount,
        $productRatingsCount:
            client.$productRatingsCount ?? $productRatingsCount,
        $productQuestionsCount:
            client.$productQuestionsCount ?? $productQuestionsCount,
        $clientNotificationsCount:
            client.$clientNotificationsCount ?? $clientNotificationsCount,
        $chatParticipantsCount:
            client.$chatParticipantsCount ?? $chatParticipantsCount);
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
        if (user != null) 'user': user,
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
        if (clientNotifications != null)
          'clientNotifications':
              clientNotifications?.map((item) => item.toJson()).toList(),
        if (chatParticipants != null)
          'chatParticipants':
              chatParticipants?.map((item) => item.toJson()).toList(),
        if (userId != null) 'userId': userId,
        if ($shoppingCartsCount != null ||
            $wishlistsCount != null ||
            $ordersCount != null ||
            $productRatingsCount != null ||
            $productQuestionsCount != null ||
            $clientNotificationsCount != null ||
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
            if ($clientNotificationsCount != null)
              'clientNotifications': $clientNotificationsCount,
            if ($chatParticipantsCount != null)
              'chatParticipants': $chatParticipantsCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Client &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          referenceAddress == other.referenceAddress &&
          distritoId == other.distritoId &&
          provinciaId == other.provinciaId &&
          departamentoId == other.departamentoId &&
          distrito == other.distrito &&
          provincia == other.provincia &&
          departmento == other.departmento &&
          user == other.user &&
          areListsEqual(shoppingCarts, other.shoppingCarts) &&
          areListsEqual(wishlists, other.wishlists) &&
          areListsEqual(orders, other.orders) &&
          areListsEqual(productRatings, other.productRatings) &&
          areListsEqual(productQuestions, other.productQuestions) &&
          areListsEqual(clientNotifications, other.clientNotifications) &&
          areListsEqual(chatParticipants, other.chatParticipants) &&
          userId == other.userId &&
          $shoppingCartsCount == other.$shoppingCartsCount &&
          $wishlistsCount == other.$wishlistsCount &&
          $ordersCount == other.$ordersCount &&
          $productRatingsCount == other.$productRatingsCount &&
          $productQuestionsCount == other.$productQuestionsCount &&
          $clientNotificationsCount == other.$clientNotificationsCount &&
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
      user.hashCode ^
      shoppingCarts.hashCode ^
      wishlists.hashCode ^
      orders.hashCode ^
      productRatings.hashCode ^
      productQuestions.hashCode ^
      clientNotifications.hashCode ^
      chatParticipants.hashCode ^
      userId.hashCode ^
      $shoppingCartsCount.hashCode ^
      $wishlistsCount.hashCode ^
      $ordersCount.hashCode ^
      $productRatingsCount.hashCode ^
      $productQuestionsCount.hashCode ^
      $clientNotificationsCount.hashCode ^
      $chatParticipantsCount.hashCode;
}
