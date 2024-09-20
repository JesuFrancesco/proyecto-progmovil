import { z } from 'zod';
import { UserCreateNestedOneWithoutWishlistsInputObjectSchema } from './UserCreateNestedOneWithoutWishlistsInput.schema';
import { WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema } from './WishlistItemCreateNestedManyWithoutWishlistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistCreateInput> = z
  .object({
    user: z.lazy(() => UserCreateNestedOneWithoutWishlistsInputObjectSchema),
    wishlistItems: z
      .lazy(() => WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema)
      .optional(),
  })
  .strict();

export const WishlistCreateInputObjectSchema = Schema;
