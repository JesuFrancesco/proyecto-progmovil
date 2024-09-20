import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ShoppingCartUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema } from './ShoppingCartUpdateOneRequiredWithoutCartItemsNestedInput.schema';
import { ProductUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutCartItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUpdateInput> = z
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
    product: z
      .lazy(
        () => ProductUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CartItemUpdateInputObjectSchema = Schema;
