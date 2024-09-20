import { z } from 'zod';
import { WishlistItemUpdateManyWithoutWishlistNestedInputObjectSchema } from './WishlistItemUpdateManyWithoutWishlistNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpdateWithoutUserInput> = z
  .object({
    wishlistItems: z
      .lazy(() => WishlistItemUpdateManyWithoutWishlistNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const WishlistUpdateWithoutUserInputObjectSchema = Schema;
