import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { NotificationOrderByWithRelationInputObjectSchema } from './NotificationOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationOrderByWithRelationInput> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
    notificationId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    notification: z
      .lazy(() => NotificationOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserNotificationOrderByWithRelationInputObjectSchema = Schema;
