import { z } from 'zod';
import { ProductCreateWithoutMarketProductsInputObjectSchema } from './ProductCreateWithoutMarketProductsInput.schema';
import { ProductUncheckedCreateWithoutMarketProductsInputObjectSchema } from './ProductUncheckedCreateWithoutMarketProductsInput.schema';
import { ProductCreateOrConnectWithoutMarketProductsInputObjectSchema } from './ProductCreateOrConnectWithoutMarketProductsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutMarketProductsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutMarketProductsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedCreateWithoutMarketProductsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ProductCreateOrConnectWithoutMarketProductsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProductCreateNestedOneWithoutMarketProductsInputObjectSchema =
  Schema;
