import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserNotificationCountOrderByAggregateInputObjectSchema } from './UserNotificationCountOrderByAggregateInput.schema';
import { UserNotificationAvgOrderByAggregateInputObjectSchema } from './UserNotificationAvgOrderByAggregateInput.schema';
import { UserNotificationMaxOrderByAggregateInputObjectSchema } from './UserNotificationMaxOrderByAggregateInput.schema';
import { UserNotificationMinOrderByAggregateInputObjectSchema } from './UserNotificationMinOrderByAggregateInput.schema';
import { UserNotificationSumOrderByAggregateInputObjectSchema } from './UserNotificationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationOrderByWithAggregationInput> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
    notificationId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => UserNotificationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => UserNotificationAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => UserNotificationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => UserNotificationMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => UserNotificationSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserNotificationOrderByWithAggregationInputObjectSchema = Schema;
