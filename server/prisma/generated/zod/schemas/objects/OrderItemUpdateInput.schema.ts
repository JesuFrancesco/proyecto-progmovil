import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { OrderUpdateOneRequiredWithoutOrderItemsNestedInputObjectSchema } from './OrderUpdateOneRequiredWithoutOrderItemsNestedInput.schema';
import { ProductUpdateOneRequiredWithoutOrderItemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutOrderItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateInput> = z
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
    product: z
      .lazy(
        () => ProductUpdateOneRequiredWithoutOrderItemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const OrderItemUpdateInputObjectSchema = Schema;
