import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWishlistsInputObjectSchema } from './UserCreateWithoutWishlistsInput.schema';
import { UserUncheckedCreateWithoutWishlistsInputObjectSchema } from './UserUncheckedCreateWithoutWishlistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutWishlistsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutWishlistsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutWishlistsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutWishlistsInputObjectSchema = Schema;
