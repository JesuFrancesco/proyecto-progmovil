import { z } from 'zod';
import { WishlistItemScalarWhereInputObjectSchema } from './WishlistItemScalarWhereInput.schema';
import { WishlistItemUpdateManyMutationInputObjectSchema } from './WishlistItemUpdateManyMutationInput.schema';
import { WishlistItemUncheckedUpdateManyWithoutWishlistItemsInputObjectSchema } from './WishlistItemUncheckedUpdateManyWithoutWishlistItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUpdateManyWithWhereWithoutWishlistInput> =
  z
    .object({
      where: z.lazy(() => WishlistItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => WishlistItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            WishlistItemUncheckedUpdateManyWithoutWishlistItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const WishlistItemUpdateManyWithWhereWithoutWishlistInputObjectSchema =
  Schema;
