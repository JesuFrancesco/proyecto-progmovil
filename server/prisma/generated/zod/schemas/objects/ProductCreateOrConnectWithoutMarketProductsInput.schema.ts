import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutMarketProductsInputObjectSchema } from './ProductCreateWithoutMarketProductsInput.schema';
import { ProductUncheckedCreateWithoutMarketProductsInputObjectSchema } from './ProductUncheckedCreateWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutMarketProductsInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutMarketProductsInputObjectSchema),
        z.lazy(
          () => ProductUncheckedCreateWithoutMarketProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutMarketProductsInputObjectSchema =
  Schema;
