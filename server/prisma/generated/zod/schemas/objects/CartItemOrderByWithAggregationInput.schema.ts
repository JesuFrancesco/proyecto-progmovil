import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CartItemCountOrderByAggregateInputObjectSchema } from './CartItemCountOrderByAggregateInput.schema';
import { CartItemAvgOrderByAggregateInputObjectSchema } from './CartItemAvgOrderByAggregateInput.schema';
import { CartItemMaxOrderByAggregateInputObjectSchema } from './CartItemMaxOrderByAggregateInput.schema';
import { CartItemMinOrderByAggregateInputObjectSchema } from './CartItemMinOrderByAggregateInput.schema';
import { CartItemSumOrderByAggregateInputObjectSchema } from './CartItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemOrderByWithAggregationInput> = z
  .object({
    amount: z.lazy(() => SortOrderSchema).optional(),
    addedAt: z.lazy(() => SortOrderSchema).optional(),
    cartId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CartItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => CartItemAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CartItemMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CartItemMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CartItemSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CartItemOrderByWithAggregationInputObjectSchema = Schema;
