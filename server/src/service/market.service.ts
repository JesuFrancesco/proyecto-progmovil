import { MarketProduct, PrismaClient, Product } from "@prisma/client";
import boom from "@hapi/boom";

class MarketService {
  private prisma = new PrismaClient();
  
  async findAllMarketProducts(id: number): Promise<MarketProduct[]> {
    const products = await this.prisma.marketProduct.findMany({
      where: {
        marketId: id
      },
      include: {
        market: true,
        product: true
      }
    });
    return products;
  }

  async postMarketProduct(data: Product, marketId: number): Promise<MarketProduct> {
    const marketProduct = await this.prisma.marketProduct.create({
      data: {
        product: {
          create: {
            ...data
          }
        },
        market: {
          connect: {
            id: marketId
          }
        }
      }
    });
    return marketProduct;
  }
}

export default MarketService;
