import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ChatMessageCountOrderByAggregateInputObjectSchema } from './ChatMessageCountOrderByAggregateInput.schema';
import { ChatMessageAvgOrderByAggregateInputObjectSchema } from './ChatMessageAvgOrderByAggregateInput.schema';
import { ChatMessageMaxOrderByAggregateInputObjectSchema } from './ChatMessageMaxOrderByAggregateInput.schema';
import { ChatMessageMinOrderByAggregateInputObjectSchema } from './ChatMessageMinOrderByAggregateInput.schema';
import { ChatMessageSumOrderByAggregateInputObjectSchema } from './ChatMessageSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageOrderByWithAggregationInput> = z
  .object({
    chatId: z.lazy(() => SortOrderSchema).optional(),
    messageId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ChatMessageCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ChatMessageAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ChatMessageMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ChatMessageMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ChatMessageSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatMessageOrderByWithAggregationInputObjectSchema = Schema;
