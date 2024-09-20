import { z } from 'zod';
import { WishlistItemCreateWithoutProductInputObjectSchema } from './WishlistItemCreateWithoutProductInput.schema';
import { WishlistItemUncheckedCreateWithoutProductInputObjectSchema } from './WishlistItemUncheckedCreateWithoutProductInput.schema';
import { WishlistItemCreateOrConnectWithoutProductInputObjectSchema } from './WishlistItemCreateOrConnectWithoutProductInput.schema';
import { WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUncheckedCreateNestedManyWithoutProductInput> =
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
      connect: z
        .union([
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
          z.lazy(() => WishlistItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WishlistItemUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
