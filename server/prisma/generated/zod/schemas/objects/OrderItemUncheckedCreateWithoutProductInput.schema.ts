import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutProductInput> = z
  .object({
    amount: z.number(),
    orderId: z.number(),
  })
  .strict();

export const OrderItemUncheckedCreateWithoutProductInputObjectSchema = Schema;
