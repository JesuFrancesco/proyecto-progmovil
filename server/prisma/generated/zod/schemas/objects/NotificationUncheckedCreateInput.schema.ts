import { z } from 'zod';
import { UserNotificationUncheckedCreateNestedManyWithoutNotificationInputObjectSchema } from './UserNotificationUncheckedCreateNestedManyWithoutNotificationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    description: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    imageUrl: z.string(),
    userNotifications: z
      .lazy(
        () =>
          UserNotificationUncheckedCreateNestedManyWithoutNotificationInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const NotificationUncheckedCreateInputObjectSchema = Schema;
