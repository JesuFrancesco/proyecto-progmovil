import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    provinciaId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DistritoAvgOrderByAggregateInputObjectSchema = Schema;
