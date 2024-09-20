import { z } from 'zod';
import { UserUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUserNotificationsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpdateWithoutNotificationInput> =
  z
    .object({
      user: z
        .lazy(
          () =>
            UserUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserNotificationUpdateWithoutNotificationInputObjectSchema =
  Schema;
