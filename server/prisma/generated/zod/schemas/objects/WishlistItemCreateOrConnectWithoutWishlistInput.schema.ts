import { z } from 'zod';
import { WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemCreateWithoutWishlistInputObjectSchema } from './WishlistItemCreateWithoutWishlistInput.schema';
import { WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedCreateWithoutWishlistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemCreateOrConnectWithoutWishlistInput> =
  z
    .object({
      where: z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => WishlistItemCreateWithoutWishlistInputObjectSchema),
        z.lazy(
          () => WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const WishlistItemCreateOrConnectWithoutWishlistInputObjectSchema =
  Schema;
