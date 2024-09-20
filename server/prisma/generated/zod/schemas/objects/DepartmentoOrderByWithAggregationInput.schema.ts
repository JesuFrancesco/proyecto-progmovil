import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DepartmentoCountOrderByAggregateInputObjectSchema } from './DepartmentoCountOrderByAggregateInput.schema';
import { DepartmentoAvgOrderByAggregateInputObjectSchema } from './DepartmentoAvgOrderByAggregateInput.schema';
import { DepartmentoMaxOrderByAggregateInputObjectSchema } from './DepartmentoMaxOrderByAggregateInput.schema';
import { DepartmentoMinOrderByAggregateInputObjectSchema } from './DepartmentoMinOrderByAggregateInput.schema';
import { DepartmentoSumOrderByAggregateInputObjectSchema } from './DepartmentoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DepartmentoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => DepartmentoAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DepartmentoMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DepartmentoMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => DepartmentoSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentoOrderByWithAggregationInputObjectSchema = Schema;
