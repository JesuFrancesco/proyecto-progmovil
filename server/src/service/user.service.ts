import { PrismaClient, Buyer } from "@prisma/client";
import boom from "@hapi/boom";
import AccountService from "./account.service";

class UserService {
  private prisma = new PrismaClient();

  // async findOne(buyerId: number): Promise<Buyer> {
  //   const buyer = await this.prisma.buyer.findUnique({
  //     where: {
  //       id: buyerId,
  //     },
  //   });

  //   if (!buyer) {
  //     throw boom.notFound();
  //   }

  //   return buyer;
  // }

  async findAll(): Promise<Buyer[]> {
    const buyers = await this.prisma.buyer.findMany();
    return buyers;
  }

  async update(userId: number, data: Buyer): Promise<Buyer> {
    const buyer = await this.prisma.buyer.update({
      where: {
        id: userId
      }, data
    });
    return buyer;
  }
}

export default UserService;
