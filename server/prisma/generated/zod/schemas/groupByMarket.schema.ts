import { z } from 'zod';
import { MarketWhereInputObjectSchema } from './objects/MarketWhereInput.schema';
import { MarketOrderByWithAggregationInputObjectSchema } from './objects/MarketOrderByWithAggregationInput.schema';
import { MarketScalarWhereWithAggregatesInputObjectSchema } from './objects/MarketScalarWhereWithAggregatesInput.schema';
import { MarketScalarFieldEnumSchema } from './enums/MarketScalarFieldEnum.schema';

export const MarketGroupBySchema = z.object({
  where: MarketWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MarketOrderByWithAggregationInputObjectSchema,
      MarketOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MarketScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MarketScalarFieldEnumSchema),
});
