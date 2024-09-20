import { z } from 'zod';
import { UserCreateNestedOneWithoutUserNotificationsInputObjectSchema } from './UserCreateNestedOneWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationCreateWithoutNotificationInput> =
  z
    .object({
      user: z.lazy(
        () => UserCreateNestedOneWithoutUserNotificationsInputObjectSchema,
      ),
    })
    .strict();

export const UserNotificationCreateWithoutNotificationInputObjectSchema =
  Schema;
