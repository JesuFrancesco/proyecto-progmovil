import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemOrderIdProductIdCompoundUniqueInput> = z
  .object({
    orderId: z.number(),
    productId: z.number(),
  })
  .strict();

export const OrderItemOrderIdProductIdCompoundUniqueInputObjectSchema = Schema;
