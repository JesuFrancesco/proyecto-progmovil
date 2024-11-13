import { PrismaClient, OrderItem, Product } from "@prisma/client";

export class OrderService {
  private prisma = new PrismaClient();
  async procesarPago(
    clientId: number,
    cartId: number,
    items: (OrderItem & { product: Product })[]
  ) {
    const createdOrder = await this.prisma.order.create({
      data: {
        clientId: clientId,
        orderItems: {
          create: items.map((e) => ({
            productId: e.productId,
            amount: e.amount,
          })),
        },
        status: "Recepcionando compra...",
        totalPrice: items.reduce(
          (prev, current) =>
            prev + current.amount * current.product.price.toNumber(),
          0
        ),
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
        client: true,
      },
    });

    await this.prisma.cartItem.deleteMany({
      where: {
        cartId,
      },
    });

    return createdOrder;
  }
}
