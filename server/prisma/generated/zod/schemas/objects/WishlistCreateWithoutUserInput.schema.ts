import { z } from 'zod';
import { WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema } from './WishlistItemCreateNestedManyWithoutWishlistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistCreateWithoutUserInput> = z
  .object({
    wishlistItems: z
      .lazy(() => WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema)
      .optional(),
  })
  .strict();

export const WishlistCreateWithoutUserInputObjectSchema = Schema;
