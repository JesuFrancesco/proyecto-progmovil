import { z } from 'zod';
import { ProductCreateWithoutMarketProductsInputObjectSchema } from './ProductCreateWithoutMarketProductsInput.schema';
import { ProductUncheckedCreateWithoutMarketProductsInputObjectSchema } from './ProductUncheckedCreateWithoutMarketProductsInput.schema';
import { ProductCreateOrConnectWithoutMarketProductsInputObjectSchema } from './ProductCreateOrConnectWithoutMarketProductsInput.schema';
import { ProductUpsertWithoutMarketProductsInputObjectSchema } from './ProductUpsertWithoutMarketProductsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutMarketProductsInputObjectSchema } from './ProductUpdateWithoutMarketProductsInput.schema';
import { ProductUncheckedUpdateWithoutMarketProductsInputObjectSchema } from './ProductUncheckedUpdateWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutMarketProductsNestedInput> =
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
      upsert: z
        .lazy(() => ProductUpsertWithoutMarketProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutMarketProductsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedUpdateWithoutMarketProductsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema =
  Schema;
