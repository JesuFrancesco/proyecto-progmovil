import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { OrderUpdateOneRequiredWithoutOrderItemsNestedInputObjectSchema } from './OrderUpdateOneRequiredWithoutOrderItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateWithoutProductInput> = z
  .object({
    amount: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    order: z
      .lazy(
        () => OrderUpdateOneRequiredWithoutOrderItemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const OrderItemUpdateWithoutProductInputObjectSchema = Schema;
