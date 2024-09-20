import { z } from 'zod';
import { BrandSellerWhereUniqueInputObjectSchema } from './objects/BrandSellerWhereUniqueInput.schema';

export const BrandSellerDeleteOneSchema = z.object({
  where: BrandSellerWhereUniqueInputObjectSchema,
});
