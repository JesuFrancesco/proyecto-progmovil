import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MarketCountOrderByAggregateInputObjectSchema } from './MarketCountOrderByAggregateInput.schema';
import { MarketAvgOrderByAggregateInputObjectSchema } from './MarketAvgOrderByAggregateInput.schema';
import { MarketMaxOrderByAggregateInputObjectSchema } from './MarketMaxOrderByAggregateInput.schema';
import { MarketMinOrderByAggregateInputObjectSchema } from './MarketMinOrderByAggregateInput.schema';
import { MarketSumOrderByAggregateInputObjectSchema } from './MarketSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    contactEmail: z.lazy(() => SortOrderSchema).optional(),
    contactPhone: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MarketCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => MarketAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => MarketMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MarketMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => MarketSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MarketOrderByWithAggregationInputObjectSchema = Schema;
