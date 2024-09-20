import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductRatingCountOrderByAggregateInputObjectSchema } from './ProductRatingCountOrderByAggregateInput.schema';
import { ProductRatingAvgOrderByAggregateInputObjectSchema } from './ProductRatingAvgOrderByAggregateInput.schema';
import { ProductRatingMaxOrderByAggregateInputObjectSchema } from './ProductRatingMaxOrderByAggregateInput.schema';
import { ProductRatingMinOrderByAggregateInputObjectSchema } from './ProductRatingMinOrderByAggregateInput.schema';
import { ProductRatingSumOrderByAggregateInputObjectSchema } from './ProductRatingSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductRatingCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ProductRatingAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProductRatingMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProductRatingMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ProductRatingSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductRatingOrderByWithAggregationInputObjectSchema = Schema;
