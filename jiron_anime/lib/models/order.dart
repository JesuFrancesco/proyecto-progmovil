//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//
import 'package:jiron_anime/utils/parseo.dart';

import 'model_base.dart';
import 'user.dart';
import 'order_item.dart';

class Order implements ToJson, Id {
  @override
  int? id;
  double? totalPrice;
  String? status;
  int? userId;
  User? user;
  List<OrderItem>? orderItems;
  int? $orderItemsCount;

  Order({
    this.id,
    this.totalPrice,
    this.status,
    this.userId,
    this.user,
    this.orderItems,
    this.$orderItemsCount,
  });

  factory Order.fromJson(Map<String, dynamic> json) => Order(
      id: json['id'] as int?,
      totalPrice: parseToDouble(json['totalPrice']),
      status: json['status'] as String?,
      userId: json['userId'] as int?,
      user: json['user'] != null
          ? User.fromJson(json['user'] as Map<String, dynamic>)
          : null,
      orderItems: json['orderItems'] != null
          ? createModels<OrderItem>(json['orderItems'], OrderItem.fromJson)
          : null,
      $orderItemsCount: json['_count']?['orderItems'] as int?);

  Order copyWith({
    int? id,
    double? totalPrice,
    String? status,
    int? userId,
    User? user,
    List<OrderItem>? orderItems,
    int? $orderItemsCount,
  }) {
    return Order(
        id: id ?? this.id,
        totalPrice: totalPrice ?? this.totalPrice,
        status: status ?? this.status,
        userId: userId ?? this.userId,
        user: user ?? this.user,
        orderItems: orderItems ?? this.orderItems,
        $orderItemsCount: $orderItemsCount ?? this.$orderItemsCount);
  }

  Order copyWithInstance(Order order) {
    return Order(
        id: order.id ?? id,
        totalPrice: order.totalPrice ?? totalPrice,
        status: order.status ?? status,
        userId: order.userId ?? userId,
        user: order.user ?? user,
        orderItems: order.orderItems ?? orderItems,
        $orderItemsCount: order.$orderItemsCount ?? $orderItemsCount);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (totalPrice != null) 'totalPrice': totalPrice,
        if (status != null) 'status': status,
        if (userId != null) 'userId': userId,
        if (user != null) 'user': user,
        if (orderItems != null)
          'orderItems': orderItems?.map((item) => item.toJson()).toList(),
        if ($orderItemsCount != null)
          '_count': {
            if ($orderItemsCount != null) 'orderItems': $orderItemsCount,
          },
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Order &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          totalPrice == other.totalPrice &&
          status == other.status &&
          userId == other.userId &&
          user == other.user &&
          areListsEqual(orderItems, other.orderItems) &&
          $orderItemsCount == other.$orderItemsCount;

  @override
  int get hashCode =>
      id.hashCode ^
      totalPrice.hashCode ^
      status.hashCode ^
      userId.hashCode ^
      user.hashCode ^
      orderItems.hashCode ^
      $orderItemsCount.hashCode;
}
