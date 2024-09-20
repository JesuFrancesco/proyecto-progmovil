import { z } from 'zod';
import { CartItemCreateWithoutProductInputObjectSchema } from './CartItemCreateWithoutProductInput.schema';
import { CartItemUncheckedCreateWithoutProductInputObjectSchema } from './CartItemUncheckedCreateWithoutProductInput.schema';
import { CartItemCreateOrConnectWithoutProductInputObjectSchema } from './CartItemCreateOrConnectWithoutProductInput.schema';
import { CartItemUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './CartItemUpsertWithWhereUniqueWithoutProductInput.schema';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './CartItemUpdateWithWhereUniqueWithoutProductInput.schema';
import { CartItemUpdateManyWithWhereWithoutProductInputObjectSchema } from './CartItemUpdateManyWithWhereWithoutProductInput.schema';
import { CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CartItemCreateWithoutProductInputObjectSchema),
          z.lazy(() => CartItemCreateWithoutProductInputObjectSchema).array(),
          z.lazy(() => CartItemUncheckedCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => CartItemUncheckedCreateWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CartItemCreateOrConnectWithoutProductInputObjectSchema),
          z
            .lazy(() => CartItemCreateOrConnectWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => CartItemUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CartItemUpsertWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => CartItemWhereUniqueInputObjectSchema),
          z.lazy(() => CartItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CartItemWhereUniqueInputObjectSchema),
          z.lazy(() => CartItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CartItemWhereUniqueInputObjectSchema),
          z.lazy(() => CartItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CartItemWhereUniqueInputObjectSchema),
          z.lazy(() => CartItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => CartItemUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => CartItemUpdateManyWithWhereWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CartItemScalarWhereInputObjectSchema),
          z.lazy(() => CartItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
