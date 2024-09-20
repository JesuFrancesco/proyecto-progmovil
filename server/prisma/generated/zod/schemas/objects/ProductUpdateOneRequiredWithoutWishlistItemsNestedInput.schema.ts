import { z } from 'zod';
import { ProductCreateWithoutWishlistItemsInputObjectSchema } from './ProductCreateWithoutWishlistItemsInput.schema';
import { ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema } from './ProductUncheckedCreateWithoutWishlistItemsInput.schema';
import { ProductCreateOrConnectWithoutWishlistItemsInputObjectSchema } from './ProductCreateOrConnectWithoutWishlistItemsInput.schema';
import { ProductUpsertWithoutWishlistItemsInputObjectSchema } from './ProductUpsertWithoutWishlistItemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutWishlistItemsInputObjectSchema } from './ProductUpdateWithoutWishlistItemsInput.schema';
import { ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutWishlistItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutWishlistItemsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutWishlistItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutWishlistItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutWishlistItemsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema =
  Schema;
