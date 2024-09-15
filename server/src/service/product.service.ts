import { PrismaClient, Product } from "@prisma/client";
import boom from "@hapi/boom";

class ProductService {
  private prisma = new PrismaClient();

  async findOne(userId: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: userId,
      },
    });

    if (!product) {
      throw boom.notFound();
    }

    return product;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }

  async findByName(name: string): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: {
        name: {
          contains: name,
        }
      }
    });
    return products;
  }

  async create(data: Product): Promise<Product> {
    const product = await this.prisma.product.create({
      data: data,
    });
    return product;
  }
}

export default ProductService;
