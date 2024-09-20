import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserNotificationListRelationFilterObjectSchema } from './UserNotificationListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => NotificationWhereInputObjectSchema),
        z.lazy(() => NotificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => NotificationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => NotificationWhereInputObjectSchema),
        z.lazy(() => NotificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    imageUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userNotifications: z
      .lazy(() => UserNotificationListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const NotificationWhereInputObjectSchema = Schema;
