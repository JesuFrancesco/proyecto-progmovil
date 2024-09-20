import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionReplyCountOrderByAggregateInputObjectSchema } from './QuestionReplyCountOrderByAggregateInput.schema';
import { QuestionReplyAvgOrderByAggregateInputObjectSchema } from './QuestionReplyAvgOrderByAggregateInput.schema';
import { QuestionReplyMaxOrderByAggregateInputObjectSchema } from './QuestionReplyMaxOrderByAggregateInput.schema';
import { QuestionReplyMinOrderByAggregateInputObjectSchema } from './QuestionReplyMinOrderByAggregateInput.schema';
import { QuestionReplySumOrderByAggregateInputObjectSchema } from './QuestionReplySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => QuestionReplyCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => QuestionReplyAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => QuestionReplyMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => QuestionReplyMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => QuestionReplySumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionReplyOrderByWithAggregationInputObjectSchema = Schema;
