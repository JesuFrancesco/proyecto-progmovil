import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    departmentoId: z.literal(true).optional(),
  })
  .strict();

export const ProvinciaMinAggregateInputObjectSchema = Schema;
