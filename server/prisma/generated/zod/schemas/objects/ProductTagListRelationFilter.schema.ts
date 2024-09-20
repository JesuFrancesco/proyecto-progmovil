import { z } from 'zod';
import { ProductTagWhereInputObjectSchema } from './ProductTagWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagListRelationFilter> = z
  .object({
    every: z.lazy(() => ProductTagWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProductTagWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProductTagWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProductTagListRelationFilterObjectSchema = Schema;
