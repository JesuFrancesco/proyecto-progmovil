import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WishlistCountOrderByAggregateInputObjectSchema } from './WishlistCountOrderByAggregateInput.schema';
import { WishlistAvgOrderByAggregateInputObjectSchema } from './WishlistAvgOrderByAggregateInput.schema';
import { WishlistMaxOrderByAggregateInputObjectSchema } from './WishlistMaxOrderByAggregateInput.schema';
import { WishlistMinOrderByAggregateInputObjectSchema } from './WishlistMinOrderByAggregateInput.schema';
import { WishlistSumOrderByAggregateInputObjectSchema } from './WishlistSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => WishlistCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => WishlistAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => WishlistMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => WishlistMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => WishlistSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const WishlistOrderByWithAggregationInputObjectSchema = Schema;
