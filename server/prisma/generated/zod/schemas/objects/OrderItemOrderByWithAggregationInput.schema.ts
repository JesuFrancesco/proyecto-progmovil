import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrderItemCountOrderByAggregateInputObjectSchema } from './OrderItemCountOrderByAggregateInput.schema';
import { OrderItemAvgOrderByAggregateInputObjectSchema } from './OrderItemAvgOrderByAggregateInput.schema';
import { OrderItemMaxOrderByAggregateInputObjectSchema } from './OrderItemMaxOrderByAggregateInput.schema';
import { OrderItemMinOrderByAggregateInputObjectSchema } from './OrderItemMinOrderByAggregateInput.schema';
import { OrderItemSumOrderByAggregateInputObjectSchema } from './OrderItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemOrderByWithAggregationInput> = z
  .object({
    amount: z.lazy(() => SortOrderSchema).optional(),
    orderId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => OrderItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => OrderItemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => OrderItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => OrderItemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => OrderItemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderItemOrderByWithAggregationInputObjectSchema = Schema;
