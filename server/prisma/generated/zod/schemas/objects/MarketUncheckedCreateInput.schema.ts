import { z } from 'zod';
import { MarketProductUncheckedCreateNestedManyWithoutMarketInputObjectSchema } from './MarketProductUncheckedCreateNestedManyWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    accountId: z.number(),
    marketProducts: z
      .lazy(
        () =>
          MarketProductUncheckedCreateNestedManyWithoutMarketInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MarketUncheckedCreateInputObjectSchema = Schema;
