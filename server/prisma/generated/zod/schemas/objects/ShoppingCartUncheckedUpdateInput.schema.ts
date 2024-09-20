import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CartItemUncheckedUpdateManyWithoutShoppingCartNestedInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutShoppingCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    cartItems: z
      .lazy(
        () =>
          CartItemUncheckedUpdateManyWithoutShoppingCartNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ShoppingCartUncheckedUpdateInputObjectSchema = Schema;
