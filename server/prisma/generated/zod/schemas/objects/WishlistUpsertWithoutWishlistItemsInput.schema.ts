import { z } from 'zod';
import { WishlistUpdateWithoutWishlistItemsInputObjectSchema } from './WishlistUpdateWithoutWishlistItemsInput.schema';
import { WishlistUncheckedUpdateWithoutWishlistItemsInputObjectSchema } from './WishlistUncheckedUpdateWithoutWishlistItemsInput.schema';
import { WishlistCreateWithoutWishlistItemsInputObjectSchema } from './WishlistCreateWithoutWishlistItemsInput.schema';
import { WishlistUncheckedCreateWithoutWishlistItemsInputObjectSchema } from './WishlistUncheckedCreateWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpsertWithoutWishlistItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => WishlistUpdateWithoutWishlistItemsInputObjectSchema),
      z.lazy(
        () => WishlistUncheckedUpdateWithoutWishlistItemsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => WishlistCreateWithoutWishlistItemsInputObjectSchema),
      z.lazy(
        () => WishlistUncheckedCreateWithoutWishlistItemsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const WishlistUpsertWithoutWishlistItemsInputObjectSchema = Schema;
