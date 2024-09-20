import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ShoppingCartRelationFilterObjectSchema } from './ShoppingCartRelationFilter.schema';
import { ShoppingCartWhereInputObjectSchema } from './ShoppingCartWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CartItemWhereInputObjectSchema),
        z.lazy(() => CartItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CartItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CartItemWhereInputObjectSchema),
        z.lazy(() => CartItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    amount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    addedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    cartId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    shoppingCart: z
      .union([
        z.lazy(() => ShoppingCartRelationFilterObjectSchema),
        z.lazy(() => ShoppingCartWhereInputObjectSchema),
      ])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CartItemWhereInputObjectSchema = Schema;
