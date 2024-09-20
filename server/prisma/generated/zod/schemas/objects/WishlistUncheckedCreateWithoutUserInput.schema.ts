import { z } from 'zod';
import { WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedCreateNestedManyWithoutWishlistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    wishlistItems: z
      .lazy(
        () =>
          WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const WishlistUncheckedCreateWithoutUserInputObjectSchema = Schema;
