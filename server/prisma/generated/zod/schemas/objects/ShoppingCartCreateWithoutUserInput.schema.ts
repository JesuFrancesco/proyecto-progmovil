import { z } from 'zod';
import { CartItemCreateNestedManyWithoutShoppingCartInputObjectSchema } from './CartItemCreateNestedManyWithoutShoppingCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartCreateWithoutUserInput> = z
  .object({
    cartItems: z
      .lazy(() => CartItemCreateNestedManyWithoutShoppingCartInputObjectSchema)
      .optional(),
  })
  .strict();

export const ShoppingCartCreateWithoutUserInputObjectSchema = Schema;
