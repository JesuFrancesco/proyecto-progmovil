import { z } from 'zod';
import { UserUpdateOneRequiredWithoutShoppingCartsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutShoppingCartsNestedInput.schema';
import { CartItemUpdateManyWithoutShoppingCartNestedInputObjectSchema } from './CartItemUpdateManyWithoutShoppingCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpdateInput> = z
  .object({
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutShoppingCartsNestedInputObjectSchema,
      )
      .optional(),
    cartItems: z
      .lazy(() => CartItemUpdateManyWithoutShoppingCartNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ShoppingCartUpdateInputObjectSchema = Schema;
