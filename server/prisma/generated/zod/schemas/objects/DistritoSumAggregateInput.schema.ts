import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    provinciaId: z.literal(true).optional(),
  })
  .strict();

export const DistritoSumAggregateInputObjectSchema = Schema;
