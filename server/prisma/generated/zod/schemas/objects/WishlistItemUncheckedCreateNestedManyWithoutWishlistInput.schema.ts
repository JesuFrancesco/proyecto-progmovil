import { z } from 'zod';
import { WishlistItemCreateWithoutWishlistInputObjectSchema } from './WishlistItemCreateWithoutWishlistInput.schema';
import { WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedCreateWithoutWishlistInput.schema';
import { WishlistItemCreateOrConnectWithoutWishlistInputObjectSchema } from './WishlistItemCreateOrConnectWithoutWishlistInput.schema';
import { WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUncheckedCreateNestedManyWithoutWishlistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WishlistItemCreateWithoutWishlistInputObjectSchema),
          z
            .lazy(() => WishlistItemCreateWithoutWishlistInputObjectSchema)
            .array(),
          z.lazy(
            () => WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema,
          ),
          z
            .lazy(
              () => WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => WishlistItemCreateOrConnectWithoutWishlistInputObjectSchema,
          ),
          z
            .lazy(
              () => WishlistItemCreateOrConnectWithoutWishlistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema =
  Schema;
