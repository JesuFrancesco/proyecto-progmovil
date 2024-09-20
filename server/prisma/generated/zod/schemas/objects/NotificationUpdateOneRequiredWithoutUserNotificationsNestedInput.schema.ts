import { z } from 'zod';
import { NotificationCreateWithoutUserNotificationsInputObjectSchema } from './NotificationCreateWithoutUserNotificationsInput.schema';
import { NotificationUncheckedCreateWithoutUserNotificationsInputObjectSchema } from './NotificationUncheckedCreateWithoutUserNotificationsInput.schema';
import { NotificationCreateOrConnectWithoutUserNotificationsInputObjectSchema } from './NotificationCreateOrConnectWithoutUserNotificationsInput.schema';
import { NotificationUpsertWithoutUserNotificationsInputObjectSchema } from './NotificationUpsertWithoutUserNotificationsInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutUserNotificationsInputObjectSchema } from './NotificationUpdateWithoutUserNotificationsInput.schema';
import { NotificationUncheckedUpdateWithoutUserNotificationsInputObjectSchema } from './NotificationUncheckedUpdateWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateOneRequiredWithoutUserNotificationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => NotificationCreateWithoutUserNotificationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              NotificationUncheckedCreateWithoutUserNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            NotificationCreateOrConnectWithoutUserNotificationsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => NotificationUpsertWithoutUserNotificationsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => NotificationWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => NotificationUpdateWithoutUserNotificationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              NotificationUncheckedUpdateWithoutUserNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const NotificationUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema =
  Schema;
