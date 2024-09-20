import { z } from 'zod';
import { WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemUpdateWithoutProductInputObjectSchema } from './WishlistItemUpdateWithoutProductInput.schema';
import { WishlistItemUncheckedUpdateWithoutProductInputObjectSchema } from './WishlistItemUncheckedUpdateWithoutProductInput.schema';
import { WishlistItemCreateWithoutProductInputObjectSchema } from './WishlistItemCreateWithoutProductInput.schema';
import { WishlistItemUncheckedCreateWithoutProductInputObjectSchema } from './WishlistItemUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => WishlistItemUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => WishlistItemUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => WishlistItemCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => WishlistItemUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const WishlistItemUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
