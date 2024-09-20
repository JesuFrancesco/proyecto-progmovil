import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductQuestionOrderByWithRelationInputObjectSchema } from './ProductQuestionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    productQuestion: z
      .lazy(() => ProductQuestionOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionReplyOrderByWithRelationInputObjectSchema = Schema;
