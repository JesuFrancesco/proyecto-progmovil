import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserNotificationOrderByRelationAggregateInputObjectSchema } from './UserNotificationOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    userNotifications: z
      .lazy(() => UserNotificationOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const NotificationOrderByWithRelationInputObjectSchema = Schema;
