import { z } from 'zod';
import { MarketCreateNestedOneWithoutMarketProductsInputObjectSchema } from './MarketCreateNestedOneWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductCreateWithoutProductInput> = z
  .object({
    market: z.lazy(
      () => MarketCreateNestedOneWithoutMarketProductsInputObjectSchema,
    ),
  })
  .strict();

export const MarketProductCreateWithoutProductInputObjectSchema = Schema;
