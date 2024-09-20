import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUncheckedCreateWithoutOrderItemsInput> = z
  .object({
    id: z.number().optional(),
    totalPrice: z.number(),
    status: z.string(),
    userId: z.number(),
  })
  .strict();

export const OrderUncheckedCreateWithoutOrderItemsInputObjectSchema = Schema;
