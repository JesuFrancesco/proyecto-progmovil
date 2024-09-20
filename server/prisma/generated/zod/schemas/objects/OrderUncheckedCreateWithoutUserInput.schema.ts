import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    totalPrice: z.number(),
    status: z.string(),
    orderItems: z
      .lazy(
        () => OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const OrderUncheckedCreateWithoutUserInputObjectSchema = Schema;
