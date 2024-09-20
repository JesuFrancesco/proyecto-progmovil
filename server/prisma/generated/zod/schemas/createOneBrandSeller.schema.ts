import { z } from 'zod';
import { BrandSellerCreateInputObjectSchema } from './objects/BrandSellerCreateInput.schema';
import { BrandSellerUncheckedCreateInputObjectSchema } from './objects/BrandSellerUncheckedCreateInput.schema';

export const BrandSellerCreateOneSchema = z.object({
  data: z.union([
    BrandSellerCreateInputObjectSchema,
    BrandSellerUncheckedCreateInputObjectSchema,
  ]),
});
