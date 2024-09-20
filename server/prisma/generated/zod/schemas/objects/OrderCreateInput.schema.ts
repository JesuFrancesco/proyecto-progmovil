import { z } from 'zod';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';
import { OrderItemCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateInput> = z
  .object({
    totalPrice: z.number(),
    status: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema),
    orderItems: z
      .lazy(() => OrderItemCreateNestedManyWithoutOrderInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderCreateInputObjectSchema = Schema;
