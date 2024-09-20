import { z } from 'zod';
import { MarketUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema } from './MarketUpdateOneRequiredWithoutMarketProductsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUpdateWithoutProductInput> = z
  .object({
    market: z
      .lazy(
        () =>
          MarketUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MarketProductUpdateWithoutProductInputObjectSchema = Schema;
