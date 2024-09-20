import { z } from 'zod';
import { MarketUpdateWithoutMarketProductsInputObjectSchema } from './MarketUpdateWithoutMarketProductsInput.schema';
import { MarketUncheckedUpdateWithoutMarketProductsInputObjectSchema } from './MarketUncheckedUpdateWithoutMarketProductsInput.schema';
import { MarketCreateWithoutMarketProductsInputObjectSchema } from './MarketCreateWithoutMarketProductsInput.schema';
import { MarketUncheckedCreateWithoutMarketProductsInputObjectSchema } from './MarketUncheckedCreateWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpsertWithoutMarketProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MarketUpdateWithoutMarketProductsInputObjectSchema),
      z.lazy(() => MarketUncheckedUpdateWithoutMarketProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MarketCreateWithoutMarketProductsInputObjectSchema),
      z.lazy(() => MarketUncheckedCreateWithoutMarketProductsInputObjectSchema),
    ]),
  })
  .strict();

export const MarketUpsertWithoutMarketProductsInputObjectSchema = Schema;
