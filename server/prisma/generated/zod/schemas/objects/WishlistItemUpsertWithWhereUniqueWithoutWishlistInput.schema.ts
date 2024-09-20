import { z } from 'zod';
import { WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemUpdateWithoutWishlistInputObjectSchema } from './WishlistItemUpdateWithoutWishlistInput.schema';
import { WishlistItemUncheckedUpdateWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedUpdateWithoutWishlistInput.schema';
import { WishlistItemCreateWithoutWishlistInputObjectSchema } from './WishlistItemCreateWithoutWishlistInput.schema';
import { WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedCreateWithoutWishlistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUpsertWithWhereUniqueWithoutWishlistInput> =
  z
    .object({
      where: z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => WishlistItemUpdateWithoutWishlistInputObjectSchema),
        z.lazy(
          () => WishlistItemUncheckedUpdateWithoutWishlistInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => WishlistItemCreateWithoutWishlistInputObjectSchema),
        z.lazy(
          () => WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const WishlistItemUpsertWithWhereUniqueWithoutWishlistInputObjectSchema =
  Schema;
