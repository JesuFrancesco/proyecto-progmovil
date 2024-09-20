import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AccountCountOrderByAggregateInputObjectSchema } from './AccountCountOrderByAggregateInput.schema';
import { AccountAvgOrderByAggregateInputObjectSchema } from './AccountAvgOrderByAggregateInput.schema';
import { AccountMaxOrderByAggregateInputObjectSchema } from './AccountMaxOrderByAggregateInput.schema';
import { AccountMinOrderByAggregateInputObjectSchema } from './AccountMinOrderByAggregateInput.schema';
import { AccountSumOrderByAggregateInputObjectSchema } from './AccountSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    phone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AccountCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => AccountAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => AccountMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AccountMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => AccountSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const AccountOrderByWithAggregationInputObjectSchema = Schema;
