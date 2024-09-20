import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CountryOrderByWithRelationInputObjectSchema } from './CountryOrderByWithRelationInput.schema';
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    countryOrigin: z.lazy(() => SortOrderSchema).optional(),
    referenceLocation: z.lazy(() => SortOrderSchema).optional(),
    countryId: z.lazy(() => SortOrderSchema).optional(),
    country: z
      .lazy(() => CountryOrderByWithRelationInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BrandSellerOrderByWithRelationInputObjectSchema = Schema;
