import { z } from 'zod';
import { ProductCreateNestedOneWithoutMarketProductsInputObjectSchema } from './ProductCreateNestedOneWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductCreateWithoutMarketInput> = z
  .object({
    product: z.lazy(
      () => ProductCreateNestedOneWithoutMarketProductsInputObjectSchema,
    ),
  })
  .strict();

export const MarketProductCreateWithoutMarketInputObjectSchema = Schema;
