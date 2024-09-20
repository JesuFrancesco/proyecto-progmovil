import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrderCountOrderByAggregateInputObjectSchema } from './OrderCountOrderByAggregateInput.schema';
import { OrderAvgOrderByAggregateInputObjectSchema } from './OrderAvgOrderByAggregateInput.schema';
import { OrderMaxOrderByAggregateInputObjectSchema } from './OrderMaxOrderByAggregateInput.schema';
import { OrderMinOrderByAggregateInputObjectSchema } from './OrderMinOrderByAggregateInput.schema';
import { OrderSumOrderByAggregateInputObjectSchema } from './OrderSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    totalPrice: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => OrderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => OrderAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => OrderMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => OrderMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => OrderSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const OrderOrderByWithAggregationInputObjectSchema = Schema;
