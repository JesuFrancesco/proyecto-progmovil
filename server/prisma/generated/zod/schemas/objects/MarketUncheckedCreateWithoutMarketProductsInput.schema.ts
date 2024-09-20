import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUncheckedCreateWithoutMarketProductsInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      contactEmail: z.string(),
      contactPhone: z.string(),
      accountId: z.number(),
    })
    .strict();

export const MarketUncheckedCreateWithoutMarketProductsInputObjectSchema =
  Schema;
