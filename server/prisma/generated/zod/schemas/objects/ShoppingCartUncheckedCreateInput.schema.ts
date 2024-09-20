import { z } from 'zod';
import { CartItemUncheckedCreateNestedManyWithoutShoppingCartInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutShoppingCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    userId: z.number(),
    cartItems: z
      .lazy(
        () =>
          CartItemUncheckedCreateNestedManyWithoutShoppingCartInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ShoppingCartUncheckedCreateInputObjectSchema = Schema;
