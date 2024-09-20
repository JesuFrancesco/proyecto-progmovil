import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemMaxAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
    orderId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const OrderItemMaxAggregateInputObjectSchema = Schema;
