import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    totalPrice: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const OrderAvgAggregateInputObjectSchema = Schema;
