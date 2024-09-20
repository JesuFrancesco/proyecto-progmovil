import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagAvgAggregateInputType> = z
  .object({
    categoryId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const ProductTagAvgAggregateInputObjectSchema = Schema;
