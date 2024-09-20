import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    departmentoId: z.literal(true).optional(),
  })
  .strict();

export const ProvinciaAvgAggregateInputObjectSchema = Schema;
