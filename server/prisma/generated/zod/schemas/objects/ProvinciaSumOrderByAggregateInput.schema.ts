import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    departmentoId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProvinciaSumOrderByAggregateInputObjectSchema = Schema;
