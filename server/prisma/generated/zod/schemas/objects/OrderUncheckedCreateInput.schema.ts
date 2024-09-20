import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    totalPrice: z.number(),
    status: z.string(),
    userId: z.number(),
    orderItems: z
      .lazy(
        () => OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const OrderUncheckedCreateInputObjectSchema = Schema;
