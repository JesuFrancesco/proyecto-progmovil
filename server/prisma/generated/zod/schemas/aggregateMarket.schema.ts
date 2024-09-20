import { z } from 'zod';
import { MarketOrderByWithRelationInputObjectSchema } from './objects/MarketOrderByWithRelationInput.schema';
import { MarketWhereInputObjectSchema } from './objects/MarketWhereInput.schema';
import { MarketWhereUniqueInputObjectSchema } from './objects/MarketWhereUniqueInput.schema';
import { MarketCountAggregateInputObjectSchema } from './objects/MarketCountAggregateInput.schema';
import { MarketMinAggregateInputObjectSchema } from './objects/MarketMinAggregateInput.schema';
import { MarketMaxAggregateInputObjectSchema } from './objects/MarketMaxAggregateInput.schema';
import { MarketAvgAggregateInputObjectSchema } from './objects/MarketAvgAggregateInput.schema';
import { MarketSumAggregateInputObjectSchema } from './objects/MarketSumAggregateInput.schema';

export const MarketAggregateSchema = z.object({
  orderBy: z
    .union([
      MarketOrderByWithRelationInputObjectSchema,
      MarketOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MarketWhereInputObjectSchema.optional(),
  cursor: MarketWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MarketCountAggregateInputObjectSchema])
    .optional(),
  _min: MarketMinAggregateInputObjectSchema.optional(),
  _max: MarketMaxAggregateInputObjectSchema.optional(),
  _avg: MarketAvgAggregateInputObjectSchema.optional(),
  _sum: MarketSumAggregateInputObjectSchema.optional(),
});
