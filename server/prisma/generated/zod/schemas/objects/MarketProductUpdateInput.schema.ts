import { z } from 'zod';
import { MarketUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema } from './MarketUpdateOneRequiredWithoutMarketProductsNestedInput.schema';
import { ProductUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutMarketProductsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUpdateInput> = z
  .object({
    market: z
      .lazy(
        () =>
          MarketUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema,
      )
      .optional(),
    product: z
      .lazy(
        () =>
          ProductUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MarketProductUpdateInputObjectSchema = Schema;
