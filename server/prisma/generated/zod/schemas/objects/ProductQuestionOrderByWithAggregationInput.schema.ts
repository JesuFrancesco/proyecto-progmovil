import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductQuestionCountOrderByAggregateInputObjectSchema } from './ProductQuestionCountOrderByAggregateInput.schema';
import { ProductQuestionAvgOrderByAggregateInputObjectSchema } from './ProductQuestionAvgOrderByAggregateInput.schema';
import { ProductQuestionMaxOrderByAggregateInputObjectSchema } from './ProductQuestionMaxOrderByAggregateInput.schema';
import { ProductQuestionMinOrderByAggregateInputObjectSchema } from './ProductQuestionMinOrderByAggregateInput.schema';
import { ProductQuestionSumOrderByAggregateInputObjectSchema } from './ProductQuestionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductQuestionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ProductQuestionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProductQuestionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProductQuestionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ProductQuestionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductQuestionOrderByWithAggregationInputObjectSchema = Schema;
