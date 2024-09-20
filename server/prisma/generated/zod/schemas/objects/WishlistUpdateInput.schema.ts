import { z } from 'zod';
import { UserUpdateOneRequiredWithoutWishlistsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWishlistsNestedInput.schema';
import { WishlistItemUpdateManyWithoutWishlistNestedInputObjectSchema } from './WishlistItemUpdateManyWithoutWishlistNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpdateInput> = z
  .object({
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutWishlistsNestedInputObjectSchema)
      .optional(),
    wishlistItems: z
      .lazy(() => WishlistItemUpdateManyWithoutWishlistNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const WishlistUpdateInputObjectSchema = Schema;
