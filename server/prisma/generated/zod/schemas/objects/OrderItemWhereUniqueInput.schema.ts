import { z } from 'zod';
import { OrderItemOrderIdProductIdCompoundUniqueInputObjectSchema } from './OrderItemOrderIdProductIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemWhereUniqueInput> = z
  .object({
    orderId_productId: z
      .lazy(() => OrderItemOrderIdProductIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderItemWhereUniqueInputObjectSchema = Schema;
