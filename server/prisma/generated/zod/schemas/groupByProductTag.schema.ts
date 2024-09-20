import { z } from 'zod';
import { ProductTagWhereInputObjectSchema } from './objects/ProductTagWhereInput.schema';
import { ProductTagOrderByWithAggregationInputObjectSchema } from './objects/ProductTagOrderByWithAggregationInput.schema';
import { ProductTagScalarWhereWithAggregatesInputObjectSchema } from './objects/ProductTagScalarWhereWithAggregatesInput.schema';
import { ProductTagScalarFieldEnumSchema } from './enums/ProductTagScalarFieldEnum.schema';

export const ProductTagGroupBySchema = z.object({
  where: ProductTagWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProductTagOrderByWithAggregationInputObjectSchema,
      ProductTagOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProductTagScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProductTagScalarFieldEnumSchema),
});
