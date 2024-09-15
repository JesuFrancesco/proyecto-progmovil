import { PrismaClient, Account } from "@prisma/client";
import boom from "@hapi/boom";

class AccountService {
  private prisma = new PrismaClient();

  async findOne(userId: number): Promise<Account> {
    const user = await this.prisma.account.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw boom.notFound();
    }

    return user;
  }

  async findAll(): Promise<Account[]> {
    const users = await this.prisma.account.findMany();
    return users;
  }

  async create(data: Account): Promise<Account> {
    const user = await this.prisma.account.create({
      data: {
        ...data,
        Buyer: {
          create: undefined
        }
      },
      include: {
        Buyer: true
      }
    });
    return user;
  }
}

export default AccountService;
