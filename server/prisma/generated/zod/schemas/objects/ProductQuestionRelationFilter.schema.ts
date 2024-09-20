import { z } from 'zod';
import { ProductQuestionWhereInputObjectSchema } from './ProductQuestionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionRelationFilter> = z
  .object({
    is: z
      .lazy(() => ProductQuestionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProductQuestionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProductQuestionRelationFilterObjectSchema = Schema;
