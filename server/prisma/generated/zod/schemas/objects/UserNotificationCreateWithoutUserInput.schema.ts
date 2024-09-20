import { z } from 'zod';
import { NotificationCreateNestedOneWithoutUserNotificationsInputObjectSchema } from './NotificationCreateNestedOneWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationCreateWithoutUserInput> = z
  .object({
    notification: z.lazy(
      () =>
        NotificationCreateNestedOneWithoutUserNotificationsInputObjectSchema,
    ),
  })
  .strict();

export const UserNotificationCreateWithoutUserInputObjectSchema = Schema;
