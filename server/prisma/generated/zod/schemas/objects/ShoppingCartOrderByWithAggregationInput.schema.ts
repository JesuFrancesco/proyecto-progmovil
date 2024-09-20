import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ShoppingCartCountOrderByAggregateInputObjectSchema } from './ShoppingCartCountOrderByAggregateInput.schema';
import { ShoppingCartAvgOrderByAggregateInputObjectSchema } from './ShoppingCartAvgOrderByAggregateInput.schema';
import { ShoppingCartMaxOrderByAggregateInputObjectSchema } from './ShoppingCartMaxOrderByAggregateInput.schema';
import { ShoppingCartMinOrderByAggregateInputObjectSchema } from './ShoppingCartMinOrderByAggregateInput.schema';
import { ShoppingCartSumOrderByAggregateInputObjectSchema } from './ShoppingCartSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ShoppingCartCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ShoppingCartAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ShoppingCartMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ShoppingCartMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ShoppingCartSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ShoppingCartOrderByWithAggregationInputObjectSchema = Schema;
