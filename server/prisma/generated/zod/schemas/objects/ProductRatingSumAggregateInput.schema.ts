import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    score: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const ProductRatingSumAggregateInputObjectSchema = Schema;
