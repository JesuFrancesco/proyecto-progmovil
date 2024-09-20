import { z } from 'zod';
import { UserUpdateWithoutWishlistsInputObjectSchema } from './UserUpdateWithoutWishlistsInput.schema';
import { UserUncheckedUpdateWithoutWishlistsInputObjectSchema } from './UserUncheckedUpdateWithoutWishlistsInput.schema';
import { UserCreateWithoutWishlistsInputObjectSchema } from './UserCreateWithoutWishlistsInput.schema';
import { UserUncheckedCreateWithoutWishlistsInputObjectSchema } from './UserUncheckedCreateWithoutWishlistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutWishlistsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutWishlistsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutWishlistsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutWishlistsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutWishlistsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutWishlistsInputObjectSchema = Schema;
