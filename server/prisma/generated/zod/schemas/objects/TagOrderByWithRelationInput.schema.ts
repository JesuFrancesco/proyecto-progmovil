import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductTagOrderByRelationAggregateInputObjectSchema } from './ProductTagOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    productTags: z
      .lazy(() => ProductTagOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagOrderByWithRelationInputObjectSchema = Schema;
