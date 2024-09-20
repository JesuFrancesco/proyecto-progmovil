import { z } from 'zod';
import { NotificationCreateWithoutUserNotificationsInputObjectSchema } from './NotificationCreateWithoutUserNotificationsInput.schema';
import { NotificationUncheckedCreateWithoutUserNotificationsInputObjectSchema } from './NotificationUncheckedCreateWithoutUserNotificationsInput.schema';
import { NotificationCreateOrConnectWithoutUserNotificationsInputObjectSchema } from './NotificationCreateOrConnectWithoutUserNotificationsInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateNestedOneWithoutUserNotificationsInput> =
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
      connect: z
        .lazy(() => NotificationWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const NotificationCreateNestedOneWithoutUserNotificationsInputObjectSchema =
  Schema;
