import { z } from 'zod';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemCreateWithoutShoppingCartInputObjectSchema } from './CartItemCreateWithoutShoppingCartInput.schema';
import { CartItemUncheckedCreateWithoutShoppingCartInputObjectSchema } from './CartItemUncheckedCreateWithoutShoppingCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemCreateOrConnectWithoutShoppingCartInput> =
  z
    .object({
      where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CartItemCreateWithoutShoppingCartInputObjectSchema),
        z.lazy(
          () => CartItemUncheckedCreateWithoutShoppingCartInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CartItemCreateOrConnectWithoutShoppingCartInputObjectSchema =
  Schema;
