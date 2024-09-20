import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemAvgAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
    cartId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const CartItemAvgAggregateInputObjectSchema = Schema;
