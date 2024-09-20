import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationMaxAggregateInputType> = z
  .object({
    userId: z.literal(true).optional(),
    notificationId: z.literal(true).optional(),
  })
  .strict();

export const UserNotificationMaxAggregateInputObjectSchema = Schema;
