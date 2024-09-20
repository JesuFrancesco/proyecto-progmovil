import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserNotificationScalarWhereInputObjectSchema),
        z.lazy(() => UserNotificationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserNotificationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserNotificationScalarWhereInputObjectSchema),
        z.lazy(() => UserNotificationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    notificationId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const UserNotificationScalarWhereInputObjectSchema = Schema;
