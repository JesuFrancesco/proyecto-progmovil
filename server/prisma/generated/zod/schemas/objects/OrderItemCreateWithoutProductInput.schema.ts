import { z } from 'zod';
import { OrderCreateNestedOneWithoutOrderItemsInputObjectSchema } from './OrderCreateNestedOneWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateWithoutProductInput> = z
  .object({
    amount: z.number(),
    order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputObjectSchema),
  })
  .strict();

export const OrderItemCreateWithoutProductInputObjectSchema = Schema;
