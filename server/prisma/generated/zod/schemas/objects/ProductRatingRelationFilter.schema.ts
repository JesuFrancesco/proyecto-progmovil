import { z } from 'zod';
import { ProductRatingWhereInputObjectSchema } from './ProductRatingWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingRelationFilter> = z
  .object({
    is: z
      .lazy(() => ProductRatingWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProductRatingWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProductRatingRelationFilterObjectSchema = Schema;
