import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpdateManyMutationInput> = z
  .object({})
  .strict();

export const UserNotificationUpdateManyMutationInputObjectSchema = Schema;
