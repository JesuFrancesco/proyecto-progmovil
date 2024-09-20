import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedCreateInput> = z
  .object({
    amount: z.number(),
    orderId: z.number(),
    productId: z.number(),
  })
  .strict();

export const OrderItemUncheckedCreateInputObjectSchema = Schema;
