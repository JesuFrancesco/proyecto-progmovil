import { z } from 'zod';
import { NotificationUpdateWithoutUserNotificationsInputObjectSchema } from './NotificationUpdateWithoutUserNotificationsInput.schema';
import { NotificationUncheckedUpdateWithoutUserNotificationsInputObjectSchema } from './NotificationUncheckedUpdateWithoutUserNotificationsInput.schema';
import { NotificationCreateWithoutUserNotificationsInputObjectSchema } from './NotificationCreateWithoutUserNotificationsInput.schema';
import { NotificationUncheckedCreateWithoutUserNotificationsInputObjectSchema } from './NotificationUncheckedCreateWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpsertWithoutUserNotificationsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => NotificationUpdateWithoutUserNotificationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            NotificationUncheckedUpdateWithoutUserNotificationsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => NotificationCreateWithoutUserNotificationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            NotificationUncheckedCreateWithoutUserNotificationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationUpsertWithoutUserNotificationsInputObjectSchema =
  Schema;
