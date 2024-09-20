import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput> = z
  .object({
    amount: z.number(),
    productId: z.number(),
  })
  .strict();

export const OrderItemUncheckedCreateWithoutOrderInputObjectSchema = Schema;
