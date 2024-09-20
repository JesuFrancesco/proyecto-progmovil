import { z } from 'zod';
import { WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemCreateWithoutProductInputObjectSchema } from './WishlistItemCreateWithoutProductInput.schema';
import { WishlistItemUncheckedCreateWithoutProductInputObjectSchema } from './WishlistItemUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => WishlistItemCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => WishlistItemUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const WishlistItemCreateOrConnectWithoutProductInputObjectSchema =
  Schema;
