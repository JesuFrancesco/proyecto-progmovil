import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutShoppingCartInput> =
  z
    .object({
      amount: z.number(),
      addedAt: z.coerce.date(),
      productId: z.number(),
    })
    .strict();

export const CartItemUncheckedCreateWithoutShoppingCartInputObjectSchema =
  Schema;
