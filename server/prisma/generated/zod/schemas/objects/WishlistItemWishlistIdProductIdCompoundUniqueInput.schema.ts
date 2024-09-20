import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemWishlistIdProductIdCompoundUniqueInput> =
  z
    .object({
      wishlistId: z.number(),
      productId: z.number(),
    })
    .strict();

export const WishlistItemWishlistIdProductIdCompoundUniqueInputObjectSchema =
  Schema;
