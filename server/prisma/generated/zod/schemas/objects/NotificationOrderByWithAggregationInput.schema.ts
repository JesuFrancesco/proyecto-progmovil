import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NotificationCountOrderByAggregateInputObjectSchema } from './NotificationCountOrderByAggregateInput.schema';
import { NotificationAvgOrderByAggregateInputObjectSchema } from './NotificationAvgOrderByAggregateInput.schema';
import { NotificationMaxOrderByAggregateInputObjectSchema } from './NotificationMaxOrderByAggregateInput.schema';
import { NotificationMinOrderByAggregateInputObjectSchema } from './NotificationMinOrderByAggregateInput.schema';
import { NotificationSumOrderByAggregateInputObjectSchema } from './NotificationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => NotificationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => NotificationAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NotificationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => NotificationMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => NotificationSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const NotificationOrderByWithAggregationInputObjectSchema = Schema;
