import { z } from 'zod';
import { UserCreateWithoutUserNotificationsInputObjectSchema } from './UserCreateWithoutUserNotificationsInput.schema';
import { UserUncheckedCreateWithoutUserNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutUserNotificationsInput.schema';
import { UserCreateOrConnectWithoutUserNotificationsInputObjectSchema } from './UserCreateOrConnectWithoutUserNotificationsInput.schema';
import { UserUpsertWithoutUserNotificationsInputObjectSchema } from './UserUpsertWithoutUserNotificationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutUserNotificationsInputObjectSchema } from './UserUpdateWithoutUserNotificationsInput.schema';
import { UserUncheckedUpdateWithoutUserNotificationsInputObjectSchema } from './UserUncheckedUpdateWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserNotificationsNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutUserNotificationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutUserNotificationsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutUserNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema =
  Schema;
