import { z } from 'zod';
import { UserUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUserNotificationsNestedInput.schema';
import { NotificationUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema } from './NotificationUpdateOneRequiredWithoutUserNotificationsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpdateInput> = z
  .object({
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema,
      )
      .optional(),
    notification: z
      .lazy(
        () =>
          NotificationUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserNotificationUpdateInputObjectSchema = Schema;
