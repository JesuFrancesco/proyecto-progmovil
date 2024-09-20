import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    departmentoId: z.literal(true).optional(),
  })
  .strict();

export const ProvinciaSumAggregateInputObjectSchema = Schema;
