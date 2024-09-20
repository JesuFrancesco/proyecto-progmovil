import { z } from 'zod';
import { WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemUpdateWithoutWishlistInputObjectSchema } from './WishlistItemUpdateWithoutWishlistInput.schema';
import { WishlistItemUncheckedUpdateWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedUpdateWithoutWishlistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUpdateWithWhereUniqueWithoutWishlistInput> =
  z
    .object({
      where: z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => WishlistItemUpdateWithoutWishlistInputObjectSchema),
        z.lazy(
          () => WishlistItemUncheckedUpdateWithoutWishlistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const WishlistItemUpdateWithWhereUniqueWithoutWishlistInputObjectSchema =
  Schema;
