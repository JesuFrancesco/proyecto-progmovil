import { z } from 'zod';
import { WishlistScalarWhereInputObjectSchema } from './WishlistScalarWhereInput.schema';
import { WishlistUpdateManyMutationInputObjectSchema } from './WishlistUpdateManyMutationInput.schema';
import { WishlistUncheckedUpdateManyWithoutWishlistsInputObjectSchema } from './WishlistUncheckedUpdateManyWithoutWishlistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => WishlistScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => WishlistUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => WishlistUncheckedUpdateManyWithoutWishlistsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const WishlistUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
