import { z } from 'zod';
import { WishlistItemCreateWithoutProductInputObjectSchema } from './WishlistItemCreateWithoutProductInput.schema';
import { WishlistItemUncheckedCreateWithoutProductInputObjectSchema } from './WishlistItemUncheckedCreateWithoutProductInput.schema';
import { WishlistItemCreateOrConnectWithoutProductInputObjectSchema } from './WishlistItemCreateOrConnectWithoutProductInput.schema';
import { WishlistItemUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './WishlistItemUpsertWithWhereUniqueWithoutProductInput.schema';
import { WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './WishlistItemUpdateWithWhereUniqueWithoutProductInput.schema';
import { WishlistItemUpdateManyWithWhereWithoutProductInputObjectSchema } from './WishlistItemUpdateManyWithWhereWithoutProductInput.schema';
import { WishlistItemScalarWhereInputObjectSchema } from './WishlistItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WishlistItemCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => WishlistItemCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => WishlistItemUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => WishlistItemUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => WishlistItemCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => WishlistItemCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              WishlistItemUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                WishlistItemUpsertWithWhereUniqueWithoutProductInputObjectSchema,
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
              WishlistItemUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                WishlistItemUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              WishlistItemUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                WishlistItemUpdateManyWithWhereWithoutProductInputObjectSchema,
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

export const WishlistItemUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
