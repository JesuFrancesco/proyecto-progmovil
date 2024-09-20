import { z } from 'zod';
import { AccountCreateNestedOneWithoutMarketsInputObjectSchema } from './AccountCreateNestedOneWithoutMarketsInput.schema';
import { MarketProductCreateNestedManyWithoutMarketInputObjectSchema } from './MarketProductCreateNestedManyWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateInput> = z
  .object({
    name: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    account: z.lazy(
      () => AccountCreateNestedOneWithoutMarketsInputObjectSchema,
    ),
    marketProducts: z
      .lazy(() => MarketProductCreateNestedManyWithoutMarketInputObjectSchema)
      .optional(),
  })
  .strict();

export const MarketCreateInputObjectSchema = Schema;
