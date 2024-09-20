import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ShoppingCartOrderByWithRelationInputObjectSchema } from './ShoppingCartOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemOrderByWithRelationInput> = z
  .object({
    amount: z.lazy(() => SortOrderSchema).optional(),
    addedAt: z.lazy(() => SortOrderSchema).optional(),
    cartId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    shoppingCart: z
      .lazy(() => ShoppingCartOrderByWithRelationInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartItemOrderByWithRelationInputObjectSchema = Schema;
