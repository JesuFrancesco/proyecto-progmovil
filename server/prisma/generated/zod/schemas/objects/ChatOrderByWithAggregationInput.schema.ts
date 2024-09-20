import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ChatCountOrderByAggregateInputObjectSchema } from './ChatCountOrderByAggregateInput.schema';
import { ChatAvgOrderByAggregateInputObjectSchema } from './ChatAvgOrderByAggregateInput.schema';
import { ChatMaxOrderByAggregateInputObjectSchema } from './ChatMaxOrderByAggregateInput.schema';
import { ChatMinOrderByAggregateInputObjectSchema } from './ChatMinOrderByAggregateInput.schema';
import { ChatSumOrderByAggregateInputObjectSchema } from './ChatSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ChatCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ChatAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ChatMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ChatMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ChatSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ChatOrderByWithAggregationInputObjectSchema = Schema;
