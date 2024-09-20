import { z } from 'zod';
import { ProductRatingWhereInputObjectSchema } from './objects/ProductRatingWhereInput.schema';
import { ProductRatingOrderByWithAggregationInputObjectSchema } from './objects/ProductRatingOrderByWithAggregationInput.schema';
import { ProductRatingScalarWhereWithAggregatesInputObjectSchema } from './objects/ProductRatingScalarWhereWithAggregatesInput.schema';
import { ProductRatingScalarFieldEnumSchema } from './enums/ProductRatingScalarFieldEnum.schema';

export const ProductRatingGroupBySchema = z.object({
  where: ProductRatingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProductRatingOrderByWithAggregationInputObjectSchema,
      ProductRatingOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProductRatingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProductRatingScalarFieldEnumSchema),
});
