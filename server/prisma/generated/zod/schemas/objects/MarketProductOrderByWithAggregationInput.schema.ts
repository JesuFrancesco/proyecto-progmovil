import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MarketProductCountOrderByAggregateInputObjectSchema } from './MarketProductCountOrderByAggregateInput.schema';
import { MarketProductAvgOrderByAggregateInputObjectSchema } from './MarketProductAvgOrderByAggregateInput.schema';
import { MarketProductMaxOrderByAggregateInputObjectSchema } from './MarketProductMaxOrderByAggregateInput.schema';
import { MarketProductMinOrderByAggregateInputObjectSchema } from './MarketProductMinOrderByAggregateInput.schema';
import { MarketProductSumOrderByAggregateInputObjectSchema } from './MarketProductSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductOrderByWithAggregationInput> = z
  .object({
    marketId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MarketProductCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MarketProductAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MarketProductMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MarketProductMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => MarketProductSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MarketProductOrderByWithAggregationInputObjectSchema = Schema;
