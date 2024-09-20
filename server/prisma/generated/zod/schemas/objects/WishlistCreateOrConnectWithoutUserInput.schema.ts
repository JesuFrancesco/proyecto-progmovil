import { z } from 'zod';
import { WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';
import { WishlistCreateWithoutUserInputObjectSchema } from './WishlistCreateWithoutUserInput.schema';
import { WishlistUncheckedCreateWithoutUserInputObjectSchema } from './WishlistUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => WishlistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => WishlistCreateWithoutUserInputObjectSchema),
      z.lazy(() => WishlistUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const WishlistCreateOrConnectWithoutUserInputObjectSchema = Schema;
