import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ShoppingCartUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema } from './ShoppingCartUpdateOneRequiredWithoutCartItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUpdateWithoutProductInput> = z
  .object({
    amount: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    addedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    shoppingCart: z
      .lazy(
        () =>
          ShoppingCartUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CartItemUpdateWithoutProductInputObjectSchema = Schema;
