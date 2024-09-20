import { z } from 'zod';
import { ProductCreateNestedOneWithoutOrderItemsInputObjectSchema } from './ProductCreateNestedOneWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateWithoutOrderInput> = z
  .object({
    amount: z.number(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutOrderItemsInputObjectSchema,
    ),
  })
  .strict();

export const OrderItemCreateWithoutOrderInputObjectSchema = Schema;
