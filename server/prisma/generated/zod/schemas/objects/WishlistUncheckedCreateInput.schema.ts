import { z } from 'zod';
import { WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedCreateNestedManyWithoutWishlistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    userId: z.number(),
    wishlistItems: z
      .lazy(
        () =>
          WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const WishlistUncheckedCreateInputObjectSchema = Schema;
