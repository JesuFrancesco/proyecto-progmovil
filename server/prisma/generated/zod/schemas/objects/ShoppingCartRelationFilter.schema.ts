import { z } from 'zod';
import { ShoppingCartWhereInputObjectSchema } from './ShoppingCartWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartRelationFilter> = z
  .object({
    is: z
      .lazy(() => ShoppingCartWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ShoppingCartWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ShoppingCartRelationFilterObjectSchema = Schema;
