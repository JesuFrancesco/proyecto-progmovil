import { z } from 'zod';
import { ProductUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutMarketProductsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUpdateWithoutMarketInput> = z
  .object({
    product: z
      .lazy(
        () =>
          ProductUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MarketProductUpdateWithoutMarketInputObjectSchema = Schema;
