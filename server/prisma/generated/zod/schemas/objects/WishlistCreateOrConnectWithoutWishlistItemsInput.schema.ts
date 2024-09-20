import { z } from 'zod';
import { WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';
import { WishlistCreateWithoutWishlistItemsInputObjectSchema } from './WishlistCreateWithoutWishlistItemsInput.schema';
import { WishlistUncheckedCreateWithoutWishlistItemsInputObjectSchema } from './WishlistUncheckedCreateWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistCreateOrConnectWithoutWishlistItemsInput> =
  z
    .object({
      where: z.lazy(() => WishlistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => WishlistCreateWithoutWishlistItemsInputObjectSchema),
        z.lazy(
          () => WishlistUncheckedCreateWithoutWishlistItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const WishlistCreateOrConnectWithoutWishlistItemsInputObjectSchema =
  Schema;
