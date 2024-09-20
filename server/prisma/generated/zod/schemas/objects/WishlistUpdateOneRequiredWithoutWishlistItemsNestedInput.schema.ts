import { z } from 'zod';
import { WishlistCreateWithoutWishlistItemsInputObjectSchema } from './WishlistCreateWithoutWishlistItemsInput.schema';
import { WishlistUncheckedCreateWithoutWishlistItemsInputObjectSchema } from './WishlistUncheckedCreateWithoutWishlistItemsInput.schema';
import { WishlistCreateOrConnectWithoutWishlistItemsInputObjectSchema } from './WishlistCreateOrConnectWithoutWishlistItemsInput.schema';
import { WishlistUpsertWithoutWishlistItemsInputObjectSchema } from './WishlistUpsertWithoutWishlistItemsInput.schema';
import { WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';
import { WishlistUpdateWithoutWishlistItemsInputObjectSchema } from './WishlistUpdateWithoutWishlistItemsInput.schema';
import { WishlistUncheckedUpdateWithoutWishlistItemsInputObjectSchema } from './WishlistUncheckedUpdateWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpdateOneRequiredWithoutWishlistItemsNestedInput> =
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
      upsert: z
        .lazy(() => WishlistUpsertWithoutWishlistItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => WishlistWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => WishlistUpdateWithoutWishlistItemsInputObjectSchema),
          z.lazy(
            () => WishlistUncheckedUpdateWithoutWishlistItemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const WishlistUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema =
  Schema;
