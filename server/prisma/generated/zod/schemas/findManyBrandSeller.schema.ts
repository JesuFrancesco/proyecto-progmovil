import { z } from 'zod';
import { BrandSellerOrderByWithRelationInputObjectSchema } from './objects/BrandSellerOrderByWithRelationInput.schema';
import { BrandSellerWhereInputObjectSchema } from './objects/BrandSellerWhereInput.schema';
import { BrandSellerWhereUniqueInputObjectSchema } from './objects/BrandSellerWhereUniqueInput.schema';
import { BrandSellerScalarFieldEnumSchema } from './enums/BrandSellerScalarFieldEnum.schema';

export const BrandSellerFindManySchema = z.object({
  orderBy: z
    .union([
      BrandSellerOrderByWithRelationInputObjectSchema,
      BrandSellerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BrandSellerWhereInputObjectSchema.optional(),
  cursor: BrandSellerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BrandSellerScalarFieldEnumSchema).optional(),
});
