import { z } from 'zod';
import { CartItemWhereInputObjectSchema } from './CartItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemListRelationFilter> = z
  .object({
    every: z.lazy(() => CartItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => CartItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => CartItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const CartItemListRelationFilterObjectSchema = Schema;
