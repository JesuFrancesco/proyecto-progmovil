import { z } from 'zod';
import { WishlistCreateNestedOneWithoutWishlistItemsInputObjectSchema } from './WishlistCreateNestedOneWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemCreateWithoutProductInput> = z
  .object({
    addedAt: z.coerce.date(),
    wishlist: z.lazy(
      () => WishlistCreateNestedOneWithoutWishlistItemsInputObjectSchema,
    ),
  })
  .strict();

export const WishlistItemCreateWithoutProductInputObjectSchema = Schema;
