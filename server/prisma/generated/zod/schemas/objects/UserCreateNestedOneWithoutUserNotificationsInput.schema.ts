import { z } from 'zod';
import { UserCreateWithoutUserNotificationsInputObjectSchema } from './UserCreateWithoutUserNotificationsInput.schema';
import { UserUncheckedCreateWithoutUserNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutUserNotificationsInput.schema';
import { UserCreateOrConnectWithoutUserNotificationsInputObjectSchema } from './UserCreateOrConnectWithoutUserNotificationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserNotificationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutUserNotificationsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutUserNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutUserNotificationsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutUserNotificationsInputObjectSchema =
  Schema;
