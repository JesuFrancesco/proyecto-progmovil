import { z } from 'zod';
import { ProductRatingWhereInputObjectSchema } from './ProductRatingWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingListRelationFilter> = z
  .object({
    every: z.lazy(() => ProductRatingWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProductRatingWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProductRatingWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProductRatingListRelationFilterObjectSchema = Schema;
