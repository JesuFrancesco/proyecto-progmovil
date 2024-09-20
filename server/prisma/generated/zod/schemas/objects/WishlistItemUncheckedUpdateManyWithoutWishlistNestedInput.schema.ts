import { z } from 'zod';
import { WishlistItemCreateWithoutWishlistInputObjectSchema } from './WishlistItemCreateWithoutWishlistInput.schema';
import { WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedCreateWithoutWishlistInput.schema';
import { WishlistItemCreateOrConnectWithoutWishlistInputObjectSchema } from './WishlistItemCreateOrConnectWithoutWishlistInput.schema';
import { WishlistItemUpsertWithWhereUniqueWithoutWishlistInputObjectSchema } from './WishlistItemUpsertWithWhereUniqueWithoutWishlistInput.schema';
import { WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemUpdateWithWhereUniqueWithoutWishlistInputObjectSchema } from './WishlistItemUpdateWithWhereUniqueWithoutWishlistInput.schema';
import { WishlistItemUpdateManyWithWhereWithoutWishlistInputObjectSchema } from './WishlistItemUpdateManyWithWhereWithoutWishlistInput.schema';
import { WishlistItemScalarWhereInputObjectSchema } from './WishlistItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUncheckedUpdateManyWithoutWishlistNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              WishlistItemUpsertWithWhereUniqueWithoutWishlistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                WishlistItemUpsertWithWhereUniqueWithoutWishlistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              WishlistItemUpdateWithWhereUniqueWithoutWishlistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                WishlistItemUpdateWithWhereUniqueWithoutWishlistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              WishlistItemUpdateManyWithWhereWithoutWishlistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                WishlistItemUpdateManyWithWhereWithoutWishlistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => WishlistItemScalarWhereInputObjectSchema),
          z.lazy(() => WishlistItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WishlistItemUncheckedUpdateManyWithoutWishlistNestedInputObjectSchema =
  Schema;
