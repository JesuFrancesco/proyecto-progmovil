import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUncheckedCreateInput> = z
  .object({
    addedAt: z.coerce.date(),
    wishlistId: z.number(),
    productId: z.number(),
  })
  .strict();

export const WishlistItemUncheckedCreateInputObjectSchema = Schema;
