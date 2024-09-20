import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProvinciaCountOrderByAggregateInputObjectSchema } from './ProvinciaCountOrderByAggregateInput.schema';
import { ProvinciaAvgOrderByAggregateInputObjectSchema } from './ProvinciaAvgOrderByAggregateInput.schema';
import { ProvinciaMaxOrderByAggregateInputObjectSchema } from './ProvinciaMaxOrderByAggregateInput.schema';
import { ProvinciaMinOrderByAggregateInputObjectSchema } from './ProvinciaMinOrderByAggregateInput.schema';
import { ProvinciaSumOrderByAggregateInputObjectSchema } from './ProvinciaSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    departmentoId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProvinciaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ProvinciaAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProvinciaMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProvinciaMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ProvinciaSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaOrderByWithAggregationInputObjectSchema = Schema;
