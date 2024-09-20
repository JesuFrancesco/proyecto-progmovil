import { z } from 'zod';
import { ProductCreateWithoutCartItemsInputObjectSchema } from './ProductCreateWithoutCartItemsInput.schema';
import { ProductUncheckedCreateWithoutCartItemsInputObjectSchema } from './ProductUncheckedCreateWithoutCartItemsInput.schema';
import { ProductCreateOrConnectWithoutCartItemsInputObjectSchema } from './ProductCreateOrConnectWithoutCartItemsInput.schema';
import { ProductUpsertWithoutCartItemsInputObjectSchema } from './ProductUpsertWithoutCartItemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCartItemsInputObjectSchema } from './ProductUpdateWithoutCartItemsInput.schema';
import { ProductUncheckedUpdateWithoutCartItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutCartItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutCartItemsInputObjectSchema),
          z.lazy(() => ProductUncheckedCreateWithoutCartItemsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutCartItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutCartItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutCartItemsInputObjectSchema),
          z.lazy(() => ProductUncheckedUpdateWithoutCartItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema =
  Schema;
