import { z } from 'zod';
import { ProductCreateWithoutOrderItemsInputObjectSchema } from './ProductCreateWithoutOrderItemsInput.schema';
import { ProductUncheckedCreateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrderItemsInput.schema';
import { ProductCreateOrConnectWithoutOrderItemsInputObjectSchema } from './ProductCreateOrConnectWithoutOrderItemsInput.schema';
import { ProductUpsertWithoutOrderItemsInputObjectSchema } from './ProductUpsertWithoutOrderItemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutOrderItemsInputObjectSchema } from './ProductUpdateWithoutOrderItemsInput.schema';
import { ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutOrderItemsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedCreateWithoutOrderItemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutOrderItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutOrderItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutOrderItemsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutOrderItemsNestedInputObjectSchema =
  Schema;
