import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUncheckedCreateInput> = z
  .object({
    amount: z.number(),
    addedAt: z.coerce.date(),
    cartId: z.number(),
    productId: z.number(),
  })
  .strict();

export const CartItemUncheckedCreateInputObjectSchema = Schema;
