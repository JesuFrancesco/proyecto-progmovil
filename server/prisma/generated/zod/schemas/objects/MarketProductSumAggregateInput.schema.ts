import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductSumAggregateInputType> = z
  .object({
    marketId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const MarketProductSumAggregateInputObjectSchema = Schema;
