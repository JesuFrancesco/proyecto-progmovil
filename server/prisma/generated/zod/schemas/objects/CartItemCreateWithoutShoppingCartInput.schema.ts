import { z } from 'zod';
import { ProductCreateNestedOneWithoutCartItemsInputObjectSchema } from './ProductCreateNestedOneWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemCreateWithoutShoppingCartInput> = z
  .object({
    amount: z.number(),
    addedAt: z.coerce.date(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutCartItemsInputObjectSchema,
    ),
  })
  .strict();

export const CartItemCreateWithoutShoppingCartInputObjectSchema = Schema;
