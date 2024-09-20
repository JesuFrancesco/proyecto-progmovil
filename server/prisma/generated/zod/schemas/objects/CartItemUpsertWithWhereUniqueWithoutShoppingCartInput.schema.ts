import { z } from 'zod';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutShoppingCartInputObjectSchema } from './CartItemUpdateWithoutShoppingCartInput.schema';
import { CartItemUncheckedUpdateWithoutShoppingCartInputObjectSchema } from './CartItemUncheckedUpdateWithoutShoppingCartInput.schema';
import { CartItemCreateWithoutShoppingCartInputObjectSchema } from './CartItemCreateWithoutShoppingCartInput.schema';
import { CartItemUncheckedCreateWithoutShoppingCartInputObjectSchema } from './CartItemUncheckedCreateWithoutShoppingCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutShoppingCartInput> =
  z
    .object({
      where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CartItemUpdateWithoutShoppingCartInputObjectSchema),
        z.lazy(
          () => CartItemUncheckedUpdateWithoutShoppingCartInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => CartItemCreateWithoutShoppingCartInputObjectSchema),
        z.lazy(
          () => CartItemUncheckedCreateWithoutShoppingCartInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CartItemUpsertWithWhereUniqueWithoutShoppingCartInputObjectSchema =
  Schema;
