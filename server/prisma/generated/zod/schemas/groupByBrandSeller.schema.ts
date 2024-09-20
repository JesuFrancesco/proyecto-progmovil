import { z } from 'zod';
import { BrandSellerWhereInputObjectSchema } from './objects/BrandSellerWhereInput.schema';
import { BrandSellerOrderByWithAggregationInputObjectSchema } from './objects/BrandSellerOrderByWithAggregationInput.schema';
import { BrandSellerScalarWhereWithAggregatesInputObjectSchema } from './objects/BrandSellerScalarWhereWithAggregatesInput.schema';
import { BrandSellerScalarFieldEnumSchema } from './enums/BrandSellerScalarFieldEnum.schema';

export const BrandSellerGroupBySchema = z.object({
  where: BrandSellerWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BrandSellerOrderByWithAggregationInputObjectSchema,
      BrandSellerOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BrandSellerScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BrandSellerScalarFieldEnumSchema),
});
