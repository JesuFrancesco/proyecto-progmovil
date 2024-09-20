import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutWishlistItemsInputObjectSchema } from './ProductCreateWithoutWishlistItemsInput.schema';
import { ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema } from './ProductUncheckedCreateWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutWishlistItemsInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutWishlistItemsInputObjectSchema),
        z.lazy(
          () => ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutWishlistItemsInputObjectSchema =
  Schema;
