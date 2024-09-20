import { z } from 'zod';
import { WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';
import { WishlistUpdateWithoutUserInputObjectSchema } from './WishlistUpdateWithoutUserInput.schema';
import { WishlistUncheckedUpdateWithoutUserInputObjectSchema } from './WishlistUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => WishlistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => WishlistUpdateWithoutUserInputObjectSchema),
        z.lazy(() => WishlistUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const WishlistUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
