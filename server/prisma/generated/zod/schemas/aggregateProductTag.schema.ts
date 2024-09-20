import { z } from 'zod';
import { ProductTagOrderByWithRelationInputObjectSchema } from './objects/ProductTagOrderByWithRelationInput.schema';
import { ProductTagWhereInputObjectSchema } from './objects/ProductTagWhereInput.schema';
import { ProductTagWhereUniqueInputObjectSchema } from './objects/ProductTagWhereUniqueInput.schema';
import { ProductTagCountAggregateInputObjectSchema } from './objects/ProductTagCountAggregateInput.schema';
import { ProductTagMinAggregateInputObjectSchema } from './objects/ProductTagMinAggregateInput.schema';
import { ProductTagMaxAggregateInputObjectSchema } from './objects/ProductTagMaxAggregateInput.schema';
import { ProductTagAvgAggregateInputObjectSchema } from './objects/ProductTagAvgAggregateInput.schema';
import { ProductTagSumAggregateInputObjectSchema } from './objects/ProductTagSumAggregateInput.schema';

export const ProductTagAggregateSchema = z.object({
  orderBy: z
    .union([
      ProductTagOrderByWithRelationInputObjectSchema,
      ProductTagOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductTagWhereInputObjectSchema.optional(),
  cursor: ProductTagWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProductTagCountAggregateInputObjectSchema])
    .optional(),
  _min: ProductTagMinAggregateInputObjectSchema.optional(),
  _max: ProductTagMaxAggregateInputObjectSchema.optional(),
  _avg: ProductTagAvgAggregateInputObjectSchema.optional(),
  _sum: ProductTagSumAggregateInputObjectSchema.optional(),
});
