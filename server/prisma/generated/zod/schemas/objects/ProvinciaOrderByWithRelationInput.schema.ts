import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DepartmentoOrderByWithRelationInputObjectSchema } from './DepartmentoOrderByWithRelationInput.schema';
import { DistritoOrderByRelationAggregateInputObjectSchema } from './DistritoOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    departmentoId: z.lazy(() => SortOrderSchema).optional(),
    departmento: z
      .lazy(() => DepartmentoOrderByWithRelationInputObjectSchema)
      .optional(),
    distritos: z
      .lazy(() => DistritoOrderByRelationAggregateInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaOrderByWithRelationInputObjectSchema = Schema;
