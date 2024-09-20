import { z } from 'zod';
import { UserCreateNestedOneWithoutWishlistsInputObjectSchema } from './UserCreateNestedOneWithoutWishlistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistCreateWithoutWishlistItemsInput> = z
  .object({
    user: z.lazy(() => UserCreateNestedOneWithoutWishlistsInputObjectSchema),
  })
  .strict();

export const WishlistCreateWithoutWishlistItemsInputObjectSchema = Schema;
