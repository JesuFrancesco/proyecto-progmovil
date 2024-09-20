import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductTagCountOrderByAggregateInputObjectSchema } from './ProductTagCountOrderByAggregateInput.schema';
import { ProductTagAvgOrderByAggregateInputObjectSchema } from './ProductTagAvgOrderByAggregateInput.schema';
import { ProductTagMaxOrderByAggregateInputObjectSchema } from './ProductTagMaxOrderByAggregateInput.schema';
import { ProductTagMinOrderByAggregateInputObjectSchema } from './ProductTagMinOrderByAggregateInput.schema';
import { ProductTagSumOrderByAggregateInputObjectSchema } from './ProductTagSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagOrderByWithAggregationInput> = z
  .object({
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductTagCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ProductTagAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProductTagMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProductTagMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ProductTagSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductTagOrderByWithAggregationInputObjectSchema = Schema;
