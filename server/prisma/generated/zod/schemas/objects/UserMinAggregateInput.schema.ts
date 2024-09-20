import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    referenceAddress: z.literal(true).optional(),
    distritoId: z.literal(true).optional(),
    provinciaId: z.literal(true).optional(),
    departamentoId: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
  })
  .strict();

export const UserMinAggregateInputObjectSchema = Schema;
