import { z } from 'zod';
import { ProductUpdateWithoutMarketProductsInputObjectSchema } from './ProductUpdateWithoutMarketProductsInput.schema';
import { ProductUncheckedUpdateWithoutMarketProductsInputObjectSchema } from './ProductUncheckedUpdateWithoutMarketProductsInput.schema';
import { ProductCreateWithoutMarketProductsInputObjectSchema } from './ProductCreateWithoutMarketProductsInput.schema';
import { ProductUncheckedCreateWithoutMarketProductsInputObjectSchema } from './ProductUncheckedCreateWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutMarketProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutMarketProductsInputObjectSchema),
      z.lazy(
        () => ProductUncheckedUpdateWithoutMarketProductsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutMarketProductsInputObjectSchema),
      z.lazy(
        () => ProductUncheckedCreateWithoutMarketProductsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ProductUpsertWithoutMarketProductsInputObjectSchema = Schema;
