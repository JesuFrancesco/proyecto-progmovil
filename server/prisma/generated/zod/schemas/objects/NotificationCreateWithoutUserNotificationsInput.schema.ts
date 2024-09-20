import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateWithoutUserNotificationsInput> =
  z
    .object({
      title: z.string(),
      description: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      imageUrl: z.string(),
    })
    .strict();

export const NotificationCreateWithoutUserNotificationsInputObjectSchema =
  Schema;
