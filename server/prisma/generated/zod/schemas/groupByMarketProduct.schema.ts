import { z } from 'zod';
import { MarketProductWhereInputObjectSchema } from './objects/MarketProductWhereInput.schema';
import { MarketProductOrderByWithAggregationInputObjectSchema } from './objects/MarketProductOrderByWithAggregationInput.schema';
import { MarketProductScalarWhereWithAggregatesInputObjectSchema } from './objects/MarketProductScalarWhereWithAggregatesInput.schema';
import { MarketProductScalarFieldEnumSchema } from './enums/MarketProductScalarFieldEnum.schema';

export const MarketProductGroupBySchema = z.object({
  where: MarketProductWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MarketProductOrderByWithAggregationInputObjectSchema,
      MarketProductOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MarketProductScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MarketProductScalarFieldEnumSchema),
});
