import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductInput> = z
  .object({
    amount: z.number(),
    addedAt: z.coerce.date(),
    cartId: z.number(),
  })
  .strict();

export const CartItemUncheckedCreateWithoutProductInputObjectSchema = Schema;
