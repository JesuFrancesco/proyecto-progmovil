import { z } from 'zod';
import { WishlistItemWishlistIdProductIdCompoundUniqueInputObjectSchema } from './WishlistItemWishlistIdProductIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemWhereUniqueInput> = z
  .object({
    wishlistId_productId: z
      .lazy(
        () => WishlistItemWishlistIdProductIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const WishlistItemWhereUniqueInputObjectSchema = Schema;
