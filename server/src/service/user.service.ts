import { PrismaClient, User } from "@prisma/client";
import boom from "@hapi/boom";
import AccountService from "./account.service";

class UserService {
  private prisma = new PrismaClient();

  // async findOne(buyerId: number): Promise<User> {
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

  async findAll(): Promise<User[]> {
    const buyers = await this.prisma.user.findMany();
    return buyers;
  }

  async update(userId: number, data: User): Promise<User> {
    const buyer = await this.prisma.user.update({
      where: {
        id: userId
      }, data
    });
    return buyer;
  }
}

export default UserService;
