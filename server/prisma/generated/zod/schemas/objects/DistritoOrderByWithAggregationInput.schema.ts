import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DistritoCountOrderByAggregateInputObjectSchema } from './DistritoCountOrderByAggregateInput.schema';
import { DistritoAvgOrderByAggregateInputObjectSchema } from './DistritoAvgOrderByAggregateInput.schema';
import { DistritoMaxOrderByAggregateInputObjectSchema } from './DistritoMaxOrderByAggregateInput.schema';
import { DistritoMinOrderByAggregateInputObjectSchema } from './DistritoMinOrderByAggregateInput.schema';
import { DistritoSumOrderByAggregateInputObjectSchema } from './DistritoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    provinciaId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DistritoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => DistritoAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DistritoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DistritoMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => DistritoSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DistritoOrderByWithAggregationInputObjectSchema = Schema;
