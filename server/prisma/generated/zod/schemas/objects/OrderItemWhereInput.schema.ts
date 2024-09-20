import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { OrderRelationFilterObjectSchema } from './OrderRelationFilter.schema';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrderItemWhereInputObjectSchema),
        z.lazy(() => OrderItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OrderItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrderItemWhereInputObjectSchema),
        z.lazy(() => OrderItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    amount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    orderId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    order: z
      .union([
        z.lazy(() => OrderRelationFilterObjectSchema),
        z.lazy(() => OrderWhereInputObjectSchema),
      ])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const OrderItemWhereInputObjectSchema = Schema;
