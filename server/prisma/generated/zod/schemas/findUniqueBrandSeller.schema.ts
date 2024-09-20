import { z } from 'zod';
import { BrandSellerWhereUniqueInputObjectSchema } from './objects/BrandSellerWhereUniqueInput.schema';

export const BrandSellerFindUniqueSchema = z.object({
  where: BrandSellerWhereUniqueInputObjectSchema,
});
