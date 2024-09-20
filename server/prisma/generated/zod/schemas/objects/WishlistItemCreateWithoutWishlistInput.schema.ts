import { z } from 'zod';
import { ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema } from './ProductCreateNestedOneWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemCreateWithoutWishlistInput> = z
  .object({
    addedAt: z.coerce.date(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema,
    ),
  })
  .strict();

export const WishlistItemCreateWithoutWishlistInputObjectSchema = Schema;
