import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    contactEmail: z.literal(true).optional(),
    contactPhone: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
  })
  .strict();

export const MarketMaxAggregateInputObjectSchema = Schema;
