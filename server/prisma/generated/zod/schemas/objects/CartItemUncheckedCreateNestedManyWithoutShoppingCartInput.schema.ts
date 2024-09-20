import { z } from 'zod';
import { CartItemCreateWithoutShoppingCartInputObjectSchema } from './CartItemCreateWithoutShoppingCartInput.schema';
import { CartItemUncheckedCreateWithoutShoppingCartInputObjectSchema } from './CartItemUncheckedCreateWithoutShoppingCartInput.schema';
import { CartItemCreateOrConnectWithoutShoppingCartInputObjectSchema } from './CartItemCreateOrConnectWithoutShoppingCartInput.schema';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUncheckedCreateNestedManyWithoutShoppingCartInput> =
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
      connect: z
        .union([
          z.lazy(() => CartItemWhereUniqueInputObjectSchema),
          z.lazy(() => CartItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CartItemUncheckedCreateNestedManyWithoutShoppingCartInputObjectSchema =
  Schema;
