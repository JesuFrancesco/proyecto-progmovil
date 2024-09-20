import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUserIdNotificationIdCompoundUniqueInput> =
  z
    .object({
      userId: z.number(),
      notificationId: z.number(),
    })
    .strict();

export const UserNotificationUserIdNotificationIdCompoundUniqueInputObjectSchema =
  Schema;
