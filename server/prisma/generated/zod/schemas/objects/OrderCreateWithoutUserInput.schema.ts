import { z } from 'zod';
import { OrderItemCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateWithoutUserInput> = z
  .object({
    totalPrice: z.number(),
    status: z.string(),
    orderItems: z
      .lazy(() => OrderItemCreateNestedManyWithoutOrderInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderCreateWithoutUserInputObjectSchema = Schema;
