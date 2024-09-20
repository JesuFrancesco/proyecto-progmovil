import { z } from 'zod';
import { OrderCreateNestedOneWithoutOrderItemsInputObjectSchema } from './OrderCreateNestedOneWithoutOrderItemsInput.schema';
import { ProductCreateNestedOneWithoutOrderItemsInputObjectSchema } from './ProductCreateNestedOneWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateInput> = z
  .object({
    amount: z.number(),
    order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputObjectSchema),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutOrderItemsInputObjectSchema,
    ),
  })
  .strict();

export const OrderItemCreateInputObjectSchema = Schema;
