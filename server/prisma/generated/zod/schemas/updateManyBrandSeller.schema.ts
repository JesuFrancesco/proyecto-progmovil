import { z } from 'zod';
import { BrandSellerUpdateManyMutationInputObjectSchema } from './objects/BrandSellerUpdateManyMutationInput.schema';
import { BrandSellerWhereInputObjectSchema } from './objects/BrandSellerWhereInput.schema';

export const BrandSellerUpdateManySchema = z.object({
  data: BrandSellerUpdateManyMutationInputObjectSchema,
  where: BrandSellerWhereInputObjectSchema.optional(),
});
