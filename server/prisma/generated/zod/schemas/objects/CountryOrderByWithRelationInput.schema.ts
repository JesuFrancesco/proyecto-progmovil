import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BrandSellerOrderByRelationAggregateInputObjectSchema } from './BrandSellerOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    brandSellers: z
      .lazy(() => BrandSellerOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CountryOrderByWithRelationInputObjectSchema = Schema;
