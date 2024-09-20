import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    referenceAddress: z.literal(true).optional(),
    distritoId: z.literal(true).optional(),
    provinciaId: z.literal(true).optional(),
    departamentoId: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UserCountAggregateInputObjectSchema = Schema;
