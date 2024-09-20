import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProvinciaOrderByRelationAggregateInputObjectSchema } from './ProvinciaOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    provincias: z
      .lazy(() => ProvinciaOrderByRelationAggregateInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentoOrderByWithRelationInputObjectSchema = Schema;
