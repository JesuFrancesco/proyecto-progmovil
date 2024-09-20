import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUncheckedCreateWithoutWishlistInput> =
  z
    .object({
      addedAt: z.coerce.date(),
      productId: z.number(),
    })
    .strict();

export const WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema =
  Schema;
