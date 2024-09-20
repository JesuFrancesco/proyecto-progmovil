import { z } from 'zod';
import { UserCreateNestedOneWithoutShoppingCartsInputObjectSchema } from './UserCreateNestedOneWithoutShoppingCartsInput.schema';
import { CartItemCreateNestedManyWithoutShoppingCartInputObjectSchema } from './CartItemCreateNestedManyWithoutShoppingCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartCreateInput> = z
  .object({
    user: z.lazy(
      () => UserCreateNestedOneWithoutShoppingCartsInputObjectSchema,
    ),
    cartItems: z
      .lazy(() => CartItemCreateNestedManyWithoutShoppingCartInputObjectSchema)
      .optional(),
  })
  .strict();

export const ShoppingCartCreateInputObjectSchema = Schema;
