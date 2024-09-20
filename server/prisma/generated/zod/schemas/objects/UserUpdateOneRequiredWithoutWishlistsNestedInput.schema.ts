import { z } from 'zod';
import { UserCreateWithoutWishlistsInputObjectSchema } from './UserCreateWithoutWishlistsInput.schema';
import { UserUncheckedCreateWithoutWishlistsInputObjectSchema } from './UserUncheckedCreateWithoutWishlistsInput.schema';
import { UserCreateOrConnectWithoutWishlistsInputObjectSchema } from './UserCreateOrConnectWithoutWishlistsInput.schema';
import { UserUpsertWithoutWishlistsInputObjectSchema } from './UserUpsertWithoutWishlistsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutWishlistsInputObjectSchema } from './UserUpdateWithoutWishlistsInput.schema';
import { UserUncheckedUpdateWithoutWishlistsInputObjectSchema } from './UserUncheckedUpdateWithoutWishlistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWishlistsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutWishlistsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutWishlistsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutWishlistsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutWishlistsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutWishlistsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutWishlistsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutWishlistsNestedInputObjectSchema =
  Schema;
