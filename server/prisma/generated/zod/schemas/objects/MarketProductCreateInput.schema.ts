import { z } from 'zod';
import { MarketCreateNestedOneWithoutMarketProductsInputObjectSchema } from './MarketCreateNestedOneWithoutMarketProductsInput.schema';
import { ProductCreateNestedOneWithoutMarketProductsInputObjectSchema } from './ProductCreateNestedOneWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductCreateInput> = z
  .object({
    market: z.lazy(
      () => MarketCreateNestedOneWithoutMarketProductsInputObjectSchema,
    ),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutMarketProductsInputObjectSchema,
    ),
  })
  .strict();

export const MarketProductCreateInputObjectSchema = Schema;
