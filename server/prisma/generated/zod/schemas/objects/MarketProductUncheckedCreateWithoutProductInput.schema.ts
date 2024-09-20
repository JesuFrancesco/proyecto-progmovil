import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUncheckedCreateWithoutProductInput> =
  z
    .object({
      marketId: z.number(),
    })
    .strict();

export const MarketProductUncheckedCreateWithoutProductInputObjectSchema =
  Schema;
