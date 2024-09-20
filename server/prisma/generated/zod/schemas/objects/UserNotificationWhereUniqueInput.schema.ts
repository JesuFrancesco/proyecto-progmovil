import { z } from 'zod';
import { UserNotificationUserIdNotificationIdCompoundUniqueInputObjectSchema } from './UserNotificationUserIdNotificationIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationWhereUniqueInput> = z
  .object({
    userId_notificationId: z
      .lazy(
        () =>
          UserNotificationUserIdNotificationIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserNotificationWhereUniqueInputObjectSchema = Schema;
