import { z } from 'zod';
import { ProductCreateWithoutWishlistItemsInputObjectSchema } from './ProductCreateWithoutWishlistItemsInput.schema';
import { ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema } from './ProductUncheckedCreateWithoutWishlistItemsInput.schema';
import { ProductCreateOrConnectWithoutWishlistItemsInputObjectSchema } from './ProductCreateOrConnectWithoutWishlistItemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutWishlistItemsInput> =
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
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema =
  Schema;
