import { z } from 'zod';
import { ProductRatingOrderByWithRelationInputObjectSchema } from './objects/ProductRatingOrderByWithRelationInput.schema';
import { ProductRatingWhereInputObjectSchema } from './objects/ProductRatingWhereInput.schema';
import { ProductRatingWhereUniqueInputObjectSchema } from './objects/ProductRatingWhereUniqueInput.schema';
import { ProductRatingCountAggregateInputObjectSchema } from './objects/ProductRatingCountAggregateInput.schema';
import { ProductRatingMinAggregateInputObjectSchema } from './objects/ProductRatingMinAggregateInput.schema';
import { ProductRatingMaxAggregateInputObjectSchema } from './objects/ProductRatingMaxAggregateInput.schema';
import { ProductRatingAvgAggregateInputObjectSchema } from './objects/ProductRatingAvgAggregateInput.schema';
import { ProductRatingSumAggregateInputObjectSchema } from './objects/ProductRatingSumAggregateInput.schema';

export const ProductRatingAggregateSchema = z.object({
  orderBy: z
    .union([
      ProductRatingOrderByWithRelationInputObjectSchema,
      ProductRatingOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductRatingWhereInputObjectSchema.optional(),
  cursor: ProductRatingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProductRatingCountAggregateInputObjectSchema])
    .optional(),
  _min: ProductRatingMinAggregateInputObjectSchema.optional(),
  _max: ProductRatingMaxAggregateInputObjectSchema.optional(),
  _avg: ProductRatingAvgAggregateInputObjectSchema.optional(),
  _sum: ProductRatingSumAggregateInputObjectSchema.optional(),
});
