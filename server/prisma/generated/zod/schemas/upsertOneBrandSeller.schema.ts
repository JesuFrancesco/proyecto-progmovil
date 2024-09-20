import { z } from 'zod';
import { BrandSellerWhereUniqueInputObjectSchema } from './objects/BrandSellerWhereUniqueInput.schema';
import { BrandSellerCreateInputObjectSchema } from './objects/BrandSellerCreateInput.schema';
import { BrandSellerUncheckedCreateInputObjectSchema } from './objects/BrandSellerUncheckedCreateInput.schema';
import { BrandSellerUpdateInputObjectSchema } from './objects/BrandSellerUpdateInput.schema';
import { BrandSellerUncheckedUpdateInputObjectSchema } from './objects/BrandSellerUncheckedUpdateInput.schema';

export const BrandSellerUpsertSchema = z.object({
  where: BrandSellerWhereUniqueInputObjectSchema,
  create: z.union([
    BrandSellerCreateInputObjectSchema,
    BrandSellerUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BrandSellerUpdateInputObjectSchema,
    BrandSellerUncheckedUpdateInputObjectSchema,
  ]),
});
