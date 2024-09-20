import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUncheckedCreateWithoutProductInput> =
  z
    .object({
      addedAt: z.coerce.date(),
      wishlistId: z.number(),
    })
    .strict();

export const WishlistItemUncheckedCreateWithoutProductInputObjectSchema =
  Schema;
