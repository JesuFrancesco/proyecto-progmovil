import { z } from 'zod';
import { MarketProductCreateNestedManyWithoutMarketInputObjectSchema } from './MarketProductCreateNestedManyWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateWithoutAccountInput> = z
  .object({
    name: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    marketProducts: z
      .lazy(() => MarketProductCreateNestedManyWithoutMarketInputObjectSchema)
      .optional(),
  })
  .strict();

export const MarketCreateWithoutAccountInputObjectSchema = Schema;
