import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagSumAggregateInputType> = z
  .object({
    categoryId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const ProductTagSumAggregateInputObjectSchema = Schema;
