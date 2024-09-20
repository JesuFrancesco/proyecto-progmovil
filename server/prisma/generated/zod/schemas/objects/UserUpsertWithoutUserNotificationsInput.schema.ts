import { z } from 'zod';
import { UserUpdateWithoutUserNotificationsInputObjectSchema } from './UserUpdateWithoutUserNotificationsInput.schema';
import { UserUncheckedUpdateWithoutUserNotificationsInputObjectSchema } from './UserUncheckedUpdateWithoutUserNotificationsInput.schema';
import { UserCreateWithoutUserNotificationsInputObjectSchema } from './UserCreateWithoutUserNotificationsInput.schema';
import { UserUncheckedCreateWithoutUserNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutUserNotificationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutUserNotificationsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutUserNotificationsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutUserNotificationsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutUserNotificationsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutUserNotificationsInputObjectSchema = Schema;
