import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BrandSellerCountOrderByAggregateInputObjectSchema } from './BrandSellerCountOrderByAggregateInput.schema';
import { BrandSellerAvgOrderByAggregateInputObjectSchema } from './BrandSellerAvgOrderByAggregateInput.schema';
import { BrandSellerMaxOrderByAggregateInputObjectSchema } from './BrandSellerMaxOrderByAggregateInput.schema';
import { BrandSellerMinOrderByAggregateInputObjectSchema } from './BrandSellerMinOrderByAggregateInput.schema';
import { BrandSellerSumOrderByAggregateInputObjectSchema } from './BrandSellerSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    countryOrigin: z.lazy(() => SortOrderSchema).optional(),
    referenceLocation: z.lazy(() => SortOrderSchema).optional(),
    countryId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BrandSellerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => BrandSellerAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => BrandSellerMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => BrandSellerMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => BrandSellerSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BrandSellerOrderByWithAggregationInputObjectSchema = Schema;
