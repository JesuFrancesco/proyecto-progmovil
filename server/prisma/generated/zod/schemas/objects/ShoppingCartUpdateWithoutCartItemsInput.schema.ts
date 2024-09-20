import { z } from 'zod';
import { UserUpdateOneRequiredWithoutShoppingCartsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutShoppingCartsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpdateWithoutCartItemsInput> = z
  .object({
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutShoppingCartsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ShoppingCartUpdateWithoutCartItemsInputObjectSchema = Schema;
