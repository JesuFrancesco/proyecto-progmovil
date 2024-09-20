import { z } from 'zod';
import { AccountCreateNestedOneWithoutMarketsInputObjectSchema } from './AccountCreateNestedOneWithoutMarketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateWithoutMarketProductsInput> = z
  .object({
    name: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    account: z.lazy(
      () => AccountCreateNestedOneWithoutMarketsInputObjectSchema,
    ),
  })
  .strict();

export const MarketCreateWithoutMarketProductsInputObjectSchema = Schema;
