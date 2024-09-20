import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrderItemScalarWhereInputObjectSchema),
        z.lazy(() => OrderItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OrderItemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrderItemScalarWhereInputObjectSchema),
        z.lazy(() => OrderItemScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const OrderItemScalarWhereInputObjectSchema = Schema;
