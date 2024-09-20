import { z } from 'zod';
import { NotificationWhereInputObjectSchema } from './NotificationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationRelationFilter> = z
  .object({
    is: z
      .lazy(() => NotificationWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => NotificationWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const NotificationRelationFilterObjectSchema = Schema;
