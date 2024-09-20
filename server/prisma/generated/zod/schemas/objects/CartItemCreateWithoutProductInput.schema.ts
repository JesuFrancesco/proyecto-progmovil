import { z } from 'zod';
import { ShoppingCartCreateNestedOneWithoutCartItemsInputObjectSchema } from './ShoppingCartCreateNestedOneWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemCreateWithoutProductInput> = z
  .object({
    amount: z.number(),
    addedAt: z.coerce.date(),
    shoppingCart: z.lazy(
      () => ShoppingCartCreateNestedOneWithoutCartItemsInputObjectSchema,
    ),
  })
  .strict();

export const CartItemCreateWithoutProductInputObjectSchema = Schema;
