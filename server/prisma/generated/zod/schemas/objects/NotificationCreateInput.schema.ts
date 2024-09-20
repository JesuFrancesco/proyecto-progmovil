import { z } from 'zod';
import { UserNotificationCreateNestedManyWithoutNotificationInputObjectSchema } from './UserNotificationCreateNestedManyWithoutNotificationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateInput> = z
  .object({
    title: z.string(),
    description: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    imageUrl: z.string(),
    userNotifications: z
      .lazy(
        () =>
          UserNotificationCreateNestedManyWithoutNotificationInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const NotificationCreateInputObjectSchema = Schema;
