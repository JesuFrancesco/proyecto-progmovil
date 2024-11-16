import { PrismaClient, OrderItem, Product } from "@prisma/client";
import boom from "@hapi/boom";

export class OrderService {
  private prisma = new PrismaClient();
  async procesarPago(
    clientId: number,
    cartId: number,
    items: { productId: number; amount: number; price: number }[]
  ) {
    // verificar stock
    items.forEach(async (item) => {
      const { stock } = await this.prisma.product.findUnique({
        where: {
          id: item.productId,
        },
      });

      if (stock < item.amount) throw boom.conflict();
    });

    // crear orden de compra
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
          (prev, current) => prev + current.amount * current.price,
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

    // actualizar stock
    items.forEach(async (item) => {
      const _ = await this.prisma.product.update({
        where: {
          id: item.productId,
        },
        data: {
          stock: {
            decrement: item.amount,
          },
        },
      });
    });

    // limpiar carrito de compras
    await this.prisma.cartItem.deleteMany({
      where: {
        cartId,
      },
    });

    return createdOrder;
  }
}
