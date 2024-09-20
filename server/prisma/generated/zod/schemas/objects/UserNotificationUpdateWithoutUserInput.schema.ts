import { z } from 'zod';
import { NotificationUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema } from './NotificationUpdateOneRequiredWithoutUserNotificationsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpdateWithoutUserInput> = z
  .object({
    notification: z
      .lazy(
        () =>
          NotificationUpdateOneRequiredWithoutUserNotificationsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserNotificationUpdateWithoutUserInputObjectSchema = Schema;
