import { z } from 'zod';
import { ShoppingCartWhereInputObjectSchema } from './ShoppingCartWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartListRelationFilter> = z
  .object({
    every: z.lazy(() => ShoppingCartWhereInputObjectSchema).optional(),
    some: z.lazy(() => ShoppingCartWhereInputObjectSchema).optional(),
    none: z.lazy(() => ShoppingCartWhereInputObjectSchema).optional(),
  })
  .strict();

export const ShoppingCartListRelationFilterObjectSchema = Schema;
