import { z } from 'zod';
import { UserNotificationWhereInputObjectSchema } from './UserNotificationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationListRelationFilter> = z
  .object({
    every: z.lazy(() => UserNotificationWhereInputObjectSchema).optional(),
    some: z.lazy(() => UserNotificationWhereInputObjectSchema).optional(),
    none: z.lazy(() => UserNotificationWhereInputObjectSchema).optional(),
  })
  .strict();

export const UserNotificationListRelationFilterObjectSchema = Schema;
