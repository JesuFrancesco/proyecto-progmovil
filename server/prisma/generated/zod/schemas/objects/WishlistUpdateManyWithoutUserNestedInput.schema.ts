import { z } from 'zod';
import { WishlistCreateWithoutUserInputObjectSchema } from './WishlistCreateWithoutUserInput.schema';
import { WishlistUncheckedCreateWithoutUserInputObjectSchema } from './WishlistUncheckedCreateWithoutUserInput.schema';
import { WishlistCreateOrConnectWithoutUserInputObjectSchema } from './WishlistCreateOrConnectWithoutUserInput.schema';
import { WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './WishlistUpsertWithWhereUniqueWithoutUserInput.schema';
import { WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';
import { WishlistUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './WishlistUpdateWithWhereUniqueWithoutUserInput.schema';
import { WishlistUpdateManyWithWhereWithoutUserInputObjectSchema } from './WishlistUpdateManyWithWhereWithoutUserInput.schema';
import { WishlistScalarWhereInputObjectSchema } from './WishlistScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => WishlistWhereUniqueInputObjectSchema),
        z.lazy(() => WishlistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => WishlistWhereUniqueInputObjectSchema),
        z.lazy(() => WishlistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => WishlistWhereUniqueInputObjectSchema),
        z.lazy(() => WishlistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => WishlistWhereUniqueInputObjectSchema),
        z.lazy(() => WishlistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => WishlistUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => WishlistUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => WishlistUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => WishlistUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => WishlistScalarWhereInputObjectSchema),
        z.lazy(() => WishlistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const WishlistUpdateManyWithoutUserNestedInputObjectSchema = Schema;
