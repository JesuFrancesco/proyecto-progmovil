import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUserNotificationsInputObjectSchema } from './UserCreateWithoutUserNotificationsInput.schema';
import { UserUncheckedCreateWithoutUserNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserNotificationsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutUserNotificationsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutUserNotificationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutUserNotificationsInputObjectSchema =
  Schema;
