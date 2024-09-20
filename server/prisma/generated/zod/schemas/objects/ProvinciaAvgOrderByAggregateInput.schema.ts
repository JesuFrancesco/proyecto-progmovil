import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    departmentoId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProvinciaAvgOrderByAggregateInputObjectSchema = Schema;
