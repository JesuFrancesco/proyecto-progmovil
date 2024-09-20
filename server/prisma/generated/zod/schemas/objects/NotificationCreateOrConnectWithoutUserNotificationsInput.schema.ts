import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutUserNotificationsInputObjectSchema } from './NotificationCreateWithoutUserNotificationsInput.schema';
import { NotificationUncheckedCreateWithoutUserNotificationsInputObjectSchema } from './NotificationUncheckedCreateWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserNotificationsInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
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

export const NotificationCreateOrConnectWithoutUserNotificationsInputObjectSchema =
  Schema;
