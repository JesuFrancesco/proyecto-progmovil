import { MarketProduct, PrismaClient, Product } from "@prisma/client";
import boom from "@hapi/boom";

class ProductService {
  private prisma = new PrismaClient();

  async findOneProduct(userId: number): Promise<Product> {
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

  async findAllProducts(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }

  async findProductsByName(name: string): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: {
        name: {
          contains: name,
        }
      }
    });
    return products;
  }

}

export default ProductService;
