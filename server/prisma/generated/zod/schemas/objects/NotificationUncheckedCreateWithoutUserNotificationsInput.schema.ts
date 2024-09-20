import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserNotificationsInput> =
  z
    .object({
      id: z.number().optional(),
      title: z.string(),
      description: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      imageUrl: z.string(),
    })
    .strict();

export const NotificationUncheckedCreateWithoutUserNotificationsInputObjectSchema =
  Schema;
