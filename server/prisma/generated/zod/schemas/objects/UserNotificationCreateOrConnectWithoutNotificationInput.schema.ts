import { z } from 'zod';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';
import { UserNotificationCreateWithoutNotificationInputObjectSchema } from './UserNotificationCreateWithoutNotificationInput.schema';
import { UserNotificationUncheckedCreateWithoutNotificationInputObjectSchema } from './UserNotificationUncheckedCreateWithoutNotificationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationCreateOrConnectWithoutNotificationInput> =
  z
    .object({
      where: z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
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

export const UserNotificationCreateOrConnectWithoutNotificationInputObjectSchema =
  Schema;
