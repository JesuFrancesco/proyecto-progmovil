import { z } from 'zod';
import { BrandSellerWhereInputObjectSchema } from './objects/BrandSellerWhereInput.schema';

export const BrandSellerDeleteManySchema = z.object({
  where: BrandSellerWhereInputObjectSchema.optional(),
});
