import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationMinOrderByAggregateInput> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
    notificationId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserNotificationMinOrderByAggregateInputObjectSchema = Schema;
