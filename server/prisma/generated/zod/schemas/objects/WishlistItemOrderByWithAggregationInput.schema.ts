import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WishlistItemCountOrderByAggregateInputObjectSchema } from './WishlistItemCountOrderByAggregateInput.schema';
import { WishlistItemAvgOrderByAggregateInputObjectSchema } from './WishlistItemAvgOrderByAggregateInput.schema';
import { WishlistItemMaxOrderByAggregateInputObjectSchema } from './WishlistItemMaxOrderByAggregateInput.schema';
import { WishlistItemMinOrderByAggregateInputObjectSchema } from './WishlistItemMinOrderByAggregateInput.schema';
import { WishlistItemSumOrderByAggregateInputObjectSchema } from './WishlistItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemOrderByWithAggregationInput> = z
  .object({
    addedAt: z.lazy(() => SortOrderSchema).optional(),
    wishlistId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => WishlistItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => WishlistItemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => WishlistItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => WishlistItemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => WishlistItemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const WishlistItemOrderByWithAggregationInputObjectSchema = Schema;
