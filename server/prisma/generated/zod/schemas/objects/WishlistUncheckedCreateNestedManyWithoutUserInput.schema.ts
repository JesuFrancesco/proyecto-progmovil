import { z } from 'zod';
import { WishlistCreateWithoutUserInputObjectSchema } from './WishlistCreateWithoutUserInput.schema';
import { WishlistUncheckedCreateWithoutUserInputObjectSchema } from './WishlistUncheckedCreateWithoutUserInput.schema';
import { WishlistCreateOrConnectWithoutUserInputObjectSchema } from './WishlistCreateOrConnectWithoutUserInput.schema';
import { WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WishlistCreateWithoutUserInputObjectSchema),
          z.lazy(() => WishlistCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => WishlistUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => WishlistUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WishlistCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => WishlistCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WishlistWhereUniqueInputObjectSchema),
          z.lazy(() => WishlistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WishlistUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
