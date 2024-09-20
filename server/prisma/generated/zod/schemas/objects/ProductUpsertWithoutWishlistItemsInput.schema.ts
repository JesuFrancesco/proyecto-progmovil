import { z } from 'zod';
import { ProductUpdateWithoutWishlistItemsInputObjectSchema } from './ProductUpdateWithoutWishlistItemsInput.schema';
import { ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutWishlistItemsInput.schema';
import { ProductCreateWithoutWishlistItemsInputObjectSchema } from './ProductCreateWithoutWishlistItemsInput.schema';
import { ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema } from './ProductUncheckedCreateWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutWishlistItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutWishlistItemsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutWishlistItemsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutWishlistItemsInputObjectSchema = Schema;
