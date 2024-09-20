import { z } from 'zod';
import { WishlistCreateWithoutWishlistItemsInputObjectSchema } from './WishlistCreateWithoutWishlistItemsInput.schema';
import { WishlistUncheckedCreateWithoutWishlistItemsInputObjectSchema } from './WishlistUncheckedCreateWithoutWishlistItemsInput.schema';
import { WishlistCreateOrConnectWithoutWishlistItemsInputObjectSchema } from './WishlistCreateOrConnectWithoutWishlistItemsInput.schema';
import { WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistCreateNestedOneWithoutWishlistItemsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WishlistCreateWithoutWishlistItemsInputObjectSchema),
          z.lazy(
            () => WishlistUncheckedCreateWithoutWishlistItemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => WishlistCreateOrConnectWithoutWishlistItemsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => WishlistWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const WishlistCreateNestedOneWithoutWishlistItemsInputObjectSchema =
  Schema;
