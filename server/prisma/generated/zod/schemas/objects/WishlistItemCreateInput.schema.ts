import { z } from 'zod';
import { WishlistCreateNestedOneWithoutWishlistItemsInputObjectSchema } from './WishlistCreateNestedOneWithoutWishlistItemsInput.schema';
import { ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema } from './ProductCreateNestedOneWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemCreateInput> = z
  .object({
    addedAt: z.coerce.date(),
    wishlist: z.lazy(
      () => WishlistCreateNestedOneWithoutWishlistItemsInputObjectSchema,
    ),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema,
    ),
  })
  .strict();

export const WishlistItemCreateInputObjectSchema = Schema;
