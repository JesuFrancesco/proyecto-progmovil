import { z } from 'zod';
import { MarketProductUncheckedCreateNestedManyWithoutMarketInputObjectSchema } from './MarketProductUncheckedCreateNestedManyWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUncheckedCreateWithoutAccountInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    marketProducts: z
      .lazy(
        () =>
          MarketProductUncheckedCreateNestedManyWithoutMarketInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MarketUncheckedCreateWithoutAccountInputObjectSchema = Schema;
