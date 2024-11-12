import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:jiron_anime/models/order.dart';
import 'package:jiron_anime/pages/chat/chat_page.dart';
import 'package:jiron_anime/pages/payment_success/payment_success_page.dart';
import 'package:jiron_anime/shared/user_widgets.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/extensions.dart';

class OrderItemWidget extends StatelessWidget {
  final Order orden;

  const OrderItemWidget({super.key, required this.orden});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Column(
          children: [
            Row(mainAxisAlignment: MainAxisAlignment.start, children: [
              GestureDetector(
                onTap: () => Get.to(() => PaymentSuccessPage(order: orden)),
                child: Text(
                  "Orden n° ${orden.id}",
                  style: Theme.of(context).textTheme.titleMedium,
                ),
              )
            ]),
            ...orden.orderItems!.map((orderItem) {
              return Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                              "Pedido realizado el: ${DateFormat("dd/MM/yyyy").format(orden.createdAt!)}"),
                          8.pv,
                          Text("Pedido: ${orden.id}"),
                          8.pv,
                          Text(
                            "Articulo: ${orderItem.product!.name}",
                            overflow: TextOverflow.ellipsis,
                            maxLines: 1,
                          ),
                          8.pv,
                          Text(
                              "Total: S. ${orderItem.product!.price?.toStringAsFixed(2)}"),
                        ],
                      ),
                      Flexible(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            SizedBox(
                              height: 150,
                              child:
                                  orderItem.product!.productAttachments != null
                                      ? Image.network(orderItem.product!
                                          .productAttachments![0].imageUrl!)
                                      : const SizedBox(),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  15.pv,
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      ElevatedButton(
                        onPressed: () => Get.to(ChatPage(
                          mercado: orderItem.product!.market!,
                        )),
                        style: ElevatedButton.styleFrom(
                          foregroundColor: Colors.white,
                          backgroundColor: AppColors.primaryColor,
                        ),
                        child: const Text("CHAT",
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold)),
                      ),
                      Row(
                        children: [
                          CurrentUser.getAvatarIcon(),
                          8.ph,
                          Text(
                            orderItem.product!.market!.name!.trim(),
                            style: Theme.of(context).textTheme.titleSmall,
                            overflow: TextOverflow.fade,
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              );
            })
          ],
        ),
        15.pv,
      ],
    );
  }
}
