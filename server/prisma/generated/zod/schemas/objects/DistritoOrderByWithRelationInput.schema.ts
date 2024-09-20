import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProvinciaOrderByWithRelationInputObjectSchema } from './ProvinciaOrderByWithRelationInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    provinciaId: z.lazy(() => SortOrderSchema).optional(),
    provincia: z
      .lazy(() => ProvinciaOrderByWithRelationInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DistritoOrderByWithRelationInputObjectSchema = Schema;
