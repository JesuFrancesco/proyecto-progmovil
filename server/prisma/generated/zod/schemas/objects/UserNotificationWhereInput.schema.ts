import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { NotificationRelationFilterObjectSchema } from './NotificationRelationFilter.schema';
import { NotificationWhereInputObjectSchema } from './NotificationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserNotificationWhereInputObjectSchema),
        z.lazy(() => UserNotificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserNotificationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserNotificationWhereInputObjectSchema),
        z.lazy(() => UserNotificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    notificationId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    notification: z
      .union([
        z.lazy(() => NotificationRelationFilterObjectSchema),
        z.lazy(() => NotificationWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserNotificationWhereInputObjectSchema = Schema;
