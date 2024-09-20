import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUncheckedCreateInput> = z
  .object({
    marketId: z.number(),
    productId: z.number(),
  })
  .strict();

export const MarketProductUncheckedCreateInputObjectSchema = Schema;
