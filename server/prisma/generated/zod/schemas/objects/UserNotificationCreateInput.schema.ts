import { z } from 'zod';
import { UserCreateNestedOneWithoutUserNotificationsInputObjectSchema } from './UserCreateNestedOneWithoutUserNotificationsInput.schema';
import { NotificationCreateNestedOneWithoutUserNotificationsInputObjectSchema } from './NotificationCreateNestedOneWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationCreateInput> = z
  .object({
    user: z.lazy(
      () => UserCreateNestedOneWithoutUserNotificationsInputObjectSchema,
    ),
    notification: z.lazy(
      () =>
        NotificationCreateNestedOneWithoutUserNotificationsInputObjectSchema,
    ),
  })
  .strict();

export const UserNotificationCreateInputObjectSchema = Schema;
