import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    provinciaId: z.literal(true).optional(),
  })
  .strict();

export const DistritoAvgAggregateInputObjectSchema = Schema;
