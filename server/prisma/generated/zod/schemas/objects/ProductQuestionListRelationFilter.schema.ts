import { z } from 'zod';
import { ProductQuestionWhereInputObjectSchema } from './ProductQuestionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionListRelationFilter> = z
  .object({
    every: z.lazy(() => ProductQuestionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProductQuestionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProductQuestionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProductQuestionListRelationFilterObjectSchema = Schema;
