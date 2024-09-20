import { z } from 'zod';
import { ShoppingCartCreateNestedOneWithoutCartItemsInputObjectSchema } from './ShoppingCartCreateNestedOneWithoutCartItemsInput.schema';
import { ProductCreateNestedOneWithoutCartItemsInputObjectSchema } from './ProductCreateNestedOneWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemCreateInput> = z
  .object({
    amount: z.number(),
    addedAt: z.coerce.date(),
    shoppingCart: z.lazy(
      () => ShoppingCartCreateNestedOneWithoutCartItemsInputObjectSchema,
    ),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutCartItemsInputObjectSchema,
    ),
  })
  .strict();

export const CartItemCreateInputObjectSchema = Schema;
