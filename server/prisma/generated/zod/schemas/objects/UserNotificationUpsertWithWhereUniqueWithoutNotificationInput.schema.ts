import { z } from 'zod';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';
import { UserNotificationUpdateWithoutNotificationInputObjectSchema } from './UserNotificationUpdateWithoutNotificationInput.schema';
import { UserNotificationUncheckedUpdateWithoutNotificationInputObjectSchema } from './UserNotificationUncheckedUpdateWithoutNotificationInput.schema';
import { UserNotificationCreateWithoutNotificationInputObjectSchema } from './UserNotificationCreateWithoutNotificationInput.schema';
import { UserNotificationUncheckedCreateWithoutNotificationInputObjectSchema } from './UserNotificationUncheckedCreateWithoutNotificationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpsertWithWhereUniqueWithoutNotificationInput> =
  z
    .object({
      where: z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => UserNotificationUpdateWithoutNotificationInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserNotificationUncheckedUpdateWithoutNotificationInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UserNotificationCreateWithoutNotificationInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserNotificationUncheckedCreateWithoutNotificationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserNotificationUpsertWithWhereUniqueWithoutNotificationInputObjectSchema =
  Schema;
