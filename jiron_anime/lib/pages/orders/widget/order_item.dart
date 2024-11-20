import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:jiron_anime/models/order.dart';
import 'package:jiron_anime/pages/chat/chat_page.dart';
import 'package:jiron_anime/pages/home/store/product/producto_page.dart';
import 'package:jiron_anime/pages/payment_success/payment_success_page.dart';
import 'package:jiron_anime/theme/colors.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';
import 'package:jiron_anime/controllers/order_controller.dart';

class OrderItemWidget extends StatelessWidget {
  final OrderController orderController;
  final Order orden;

  const OrderItemWidget(
      {super.key, required this.orden, required this.orderController});

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
                        child: GestureDetector(
                          onTap: () => Get.to(
                              () => ProductoPage(producto: orderItem.product!)),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: [
                              SizedBox(
                                height: 150,
                                child: orderItem.product!.productAttachments !=
                                        null
                                    ? Image.network(orderItem.product!
                                        .productAttachments![0].imageUrl!)
                                    : const SizedBox(),
                              ),
                            ],
                          ),
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
                          mercado: orderItem.product!.market!)),
                        style: ElevatedButton.styleFrom(
                          foregroundColor: Colors.white,
                          backgroundColor: AppColors.primaryColor,
                        ),
                        child: const Text("CHAT",
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold)),
                      ),
                      ElevatedButton.icon(
                        onPressed: () {
                          _showConfirmBottomSheet(context);
                        },
                        style: ElevatedButton.styleFrom(
                          foregroundColor: Colors.white,
                          backgroundColor: Colors.green,
                        ),
                        icon: const Icon(Icons.check),
                        label: const Text("CONFIRMAR",
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold)),
                      ),
                      Row(
                        children: [
                          CircleAvatar(
                              child:
                                  (orderItem.product!.market!.logoUrl != null)
                                      ? Image.network(
                                          orderItem.product!.market!.logoUrl!,
                                        )
                                      : const Text("?")),
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

  void _showConfirmBottomSheet(BuildContext context) {
    Get.bottomSheet(
      Obx(() {
        return Padding(
          padding: EdgeInsets.only(
            left: 16,
            right: 16,
            top: 16,
            bottom: MediaQuery.of(context).viewInsets.bottom + 16,
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                "¿Confirmar que esta orden está completa?",
                style: Theme.of(context).textTheme.titleMedium,
                textAlign: TextAlign.center,
              ),
              16.pv,
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  ElevatedButton(
                    onPressed: () => Get.back(),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.grey.shade300,
                      foregroundColor: Colors.black,
                    ),
                    child: const Text("Cancelar"),
                  ),
                  ElevatedButton(
                    onPressed: orderController.isLoading.value
                        ? null
                        : () async {
                            try {
                              orderController.isLoading.value = true;
                              await orderController.completarOrden(orden.id!);

                              final index = orderController.ordenes
                                  .indexWhere((e) => e.id == orden.id);
                              if (index != -1) {
                                final updatedOrder = orderController
                                    .ordenes[index]
                                    .copyWith(status: "Completado");
                                orderController.ordenes[index] = updatedOrder;
                              }
                            } catch (e) {
                              // Manejo de errores (si es necesario)
                            } finally {
                              orderController.isLoading.value = false;
                              Get.back();
                            }
                          },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.green,
                      foregroundColor: Colors.white,
                    ),
                    child: orderController.isLoading.value
                        ? const CircularProgressIndicator(
                            color: Colors.white,
                          )
                        : const Text("Confirmar"),
                  ),
                ],
              ),
            ],
          ),
        );
      }),
      isDismissible: true,
      isScrollControlled: true, // Esto asegura que el modal se ajuste al contenido
    );
  }
}
