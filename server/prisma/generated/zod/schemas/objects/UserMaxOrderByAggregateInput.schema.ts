import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    referenceAddress: z.lazy(() => SortOrderSchema).optional(),
    distritoId: z.lazy(() => SortOrderSchema).optional(),
    provinciaId: z.lazy(() => SortOrderSchema).optional(),
    departamentoId: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserMaxOrderByAggregateInputObjectSchema = Schema;
