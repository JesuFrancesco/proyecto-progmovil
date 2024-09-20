import { z } from 'zod';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateWithoutOrderItemsInput> = z
  .object({
    totalPrice: z.number(),
    status: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema),
  })
  .strict();

export const OrderCreateWithoutOrderItemsInputObjectSchema = Schema;
