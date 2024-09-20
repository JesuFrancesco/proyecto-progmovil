import { z } from 'zod';
import { BrandSellerUpdateInputObjectSchema } from './objects/BrandSellerUpdateInput.schema';
import { BrandSellerUncheckedUpdateInputObjectSchema } from './objects/BrandSellerUncheckedUpdateInput.schema';
import { BrandSellerWhereUniqueInputObjectSchema } from './objects/BrandSellerWhereUniqueInput.schema';

export const BrandSellerUpdateOneSchema = z.object({
  data: z.union([
    BrandSellerUpdateInputObjectSchema,
    BrandSellerUncheckedUpdateInputObjectSchema,
  ]),
  where: BrandSellerWhereUniqueInputObjectSchema,
});
