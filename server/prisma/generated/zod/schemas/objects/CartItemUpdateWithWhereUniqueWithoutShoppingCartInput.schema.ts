import { z } from 'zod';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutShoppingCartInputObjectSchema } from './CartItemUpdateWithoutShoppingCartInput.schema';
import { CartItemUncheckedUpdateWithoutShoppingCartInputObjectSchema } from './CartItemUncheckedUpdateWithoutShoppingCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutShoppingCartInput> =
  z
    .object({
      where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CartItemUpdateWithoutShoppingCartInputObjectSchema),
        z.lazy(
          () => CartItemUncheckedUpdateWithoutShoppingCartInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CartItemUpdateWithWhereUniqueWithoutShoppingCartInputObjectSchema =
  Schema;
