import { z } from 'zod';
import { CartItemUncheckedCreateNestedManyWithoutShoppingCartInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutShoppingCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    cartItems: z
      .lazy(
        () =>
          CartItemUncheckedCreateNestedManyWithoutShoppingCartInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ShoppingCartUncheckedCreateWithoutUserInputObjectSchema = Schema;
