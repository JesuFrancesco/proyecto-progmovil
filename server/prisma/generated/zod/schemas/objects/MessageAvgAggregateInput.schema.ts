import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    status: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
  })
  .strict();

export const MessageAvgAggregateInputObjectSchema = Schema;
