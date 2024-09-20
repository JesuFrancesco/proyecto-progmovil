import { z } from 'zod';
import { UserCreateWithoutWishlistsInputObjectSchema } from './UserCreateWithoutWishlistsInput.schema';
import { UserUncheckedCreateWithoutWishlistsInputObjectSchema } from './UserUncheckedCreateWithoutWishlistsInput.schema';
import { UserCreateOrConnectWithoutWishlistsInputObjectSchema } from './UserCreateOrConnectWithoutWishlistsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutWishlistsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutWishlistsInputObjectSchema = Schema;
