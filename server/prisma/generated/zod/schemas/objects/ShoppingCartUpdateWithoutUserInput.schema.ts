import { z } from 'zod';
import { CartItemUpdateManyWithoutShoppingCartNestedInputObjectSchema } from './CartItemUpdateManyWithoutShoppingCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpdateWithoutUserInput> = z
  .object({
    cartItems: z
      .lazy(() => CartItemUpdateManyWithoutShoppingCartNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ShoppingCartUpdateWithoutUserInputObjectSchema = Schema;
