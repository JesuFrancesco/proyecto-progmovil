import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUncheckedCreateWithoutUserInput> =
  z
    .object({
      notificationId: z.number(),
    })
    .strict();

export const UserNotificationUncheckedCreateWithoutUserInputObjectSchema =
  Schema;
