import { z } from 'zod';
import { UserUpdateOneRequiredWithoutWishlistsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWishlistsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpdateWithoutWishlistItemsInput> = z
  .object({
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutWishlistsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const WishlistUpdateWithoutWishlistItemsInputObjectSchema = Schema;
