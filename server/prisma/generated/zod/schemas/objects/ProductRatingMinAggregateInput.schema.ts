import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    score: z.literal(true).optional(),
    text: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const ProductRatingMinAggregateInputObjectSchema = Schema;
