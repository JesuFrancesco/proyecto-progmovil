import { z } from 'zod';
import { WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';
import { WishlistUpdateWithoutUserInputObjectSchema } from './WishlistUpdateWithoutUserInput.schema';
import { WishlistUncheckedUpdateWithoutUserInputObjectSchema } from './WishlistUncheckedUpdateWithoutUserInput.schema';
import { WishlistCreateWithoutUserInputObjectSchema } from './WishlistCreateWithoutUserInput.schema';
import { WishlistUncheckedCreateWithoutUserInputObjectSchema } from './WishlistUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => WishlistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => WishlistUpdateWithoutUserInputObjectSchema),
        z.lazy(() => WishlistUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => WishlistCreateWithoutUserInputObjectSchema),
        z.lazy(() => WishlistUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
