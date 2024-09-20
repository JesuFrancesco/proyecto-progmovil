import { z } from 'zod';
import { CartItemCreateWithoutShoppingCartInputObjectSchema } from './CartItemCreateWithoutShoppingCartInput.schema';
import { CartItemUncheckedCreateWithoutShoppingCartInputObjectSchema } from './CartItemUncheckedCreateWithoutShoppingCartInput.schema';
import { CartItemCreateOrConnectWithoutShoppingCartInputObjectSchema } from './CartItemCreateOrConnectWithoutShoppingCartInput.schema';
import { CartItemUpsertWithWhereUniqueWithoutShoppingCartInputObjectSchema } from './CartItemUpsertWithWhereUniqueWithoutShoppingCartInput.schema';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithWhereUniqueWithoutShoppingCartInputObjectSchema } from './CartItemUpdateWithWhereUniqueWithoutShoppingCartInput.schema';
import { CartItemUpdateManyWithWhereWithoutShoppingCartInputObjectSchema } from './CartItemUpdateManyWithWhereWithoutShoppingCartInput.schema';
import { CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutShoppingCartNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CartItemCreateWithoutShoppingCartInputObjectSchema),
          z
            .lazy(() => CartItemCreateWithoutShoppingCartInputObjectSchema)
            .array(),
          z.lazy(
            () => CartItemUncheckedCreateWithoutShoppingCartInputObjectSchema,
          ),
          z
            .lazy(
              () => CartItemUncheckedCreateWithoutShoppingCartInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => CartItemCreateOrConnectWithoutShoppingCartInputObjectSchema,
          ),
          z
            .lazy(
              () => CartItemCreateOrConnectWithoutShoppingCartInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              CartItemUpsertWithWhereUniqueWithoutShoppingCartInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CartItemUpsertWithWhereUniqueWithoutShoppingCartInputObjectSchema,
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
            () =>
              CartItemUpdateWithWhereUniqueWithoutShoppingCartInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CartItemUpdateWithWhereUniqueWithoutShoppingCartInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              CartItemUpdateManyWithWhereWithoutShoppingCartInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CartItemUpdateManyWithWhereWithoutShoppingCartInputObjectSchema,
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

export const CartItemUncheckedUpdateManyWithoutShoppingCartNestedInputObjectSchema =
  Schema;
