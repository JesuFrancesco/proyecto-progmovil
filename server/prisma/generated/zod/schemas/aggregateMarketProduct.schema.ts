import { z } from 'zod';
import { MarketProductOrderByWithRelationInputObjectSchema } from './objects/MarketProductOrderByWithRelationInput.schema';
import { MarketProductWhereInputObjectSchema } from './objects/MarketProductWhereInput.schema';
import { MarketProductWhereUniqueInputObjectSchema } from './objects/MarketProductWhereUniqueInput.schema';
import { MarketProductCountAggregateInputObjectSchema } from './objects/MarketProductCountAggregateInput.schema';
import { MarketProductMinAggregateInputObjectSchema } from './objects/MarketProductMinAggregateInput.schema';
import { MarketProductMaxAggregateInputObjectSchema } from './objects/MarketProductMaxAggregateInput.schema';
import { MarketProductAvgAggregateInputObjectSchema } from './objects/MarketProductAvgAggregateInput.schema';
import { MarketProductSumAggregateInputObjectSchema } from './objects/MarketProductSumAggregateInput.schema';

export const MarketProductAggregateSchema = z.object({
  orderBy: z
    .union([
      MarketProductOrderByWithRelationInputObjectSchema,
      MarketProductOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MarketProductWhereInputObjectSchema.optional(),
  cursor: MarketProductWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MarketProductCountAggregateInputObjectSchema])
    .optional(),
  _min: MarketProductMinAggregateInputObjectSchema.optional(),
  _max: MarketProductMaxAggregateInputObjectSchema.optional(),
  _avg: MarketProductAvgAggregateInputObjectSchema.optional(),
  _sum: MarketProductSumAggregateInputObjectSchema.optional(),
});
