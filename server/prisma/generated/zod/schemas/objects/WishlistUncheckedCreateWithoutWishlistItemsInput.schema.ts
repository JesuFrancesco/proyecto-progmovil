import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUncheckedCreateWithoutWishlistItemsInput> =
  z
    .object({
      id: z.number().optional(),
      userId: z.number(),
    })
    .strict();

export const WishlistUncheckedCreateWithoutWishlistItemsInputObjectSchema =
  Schema;
