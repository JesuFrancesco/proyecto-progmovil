import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUncheckedCreateWithoutNotificationInput> =
  z
    .object({
      userId: z.number(),
    })
    .strict();

export const UserNotificationUncheckedCreateWithoutNotificationInputObjectSchema =
  Schema;
