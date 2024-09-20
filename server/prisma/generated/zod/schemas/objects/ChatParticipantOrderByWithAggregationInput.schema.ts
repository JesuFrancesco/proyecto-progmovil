import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ChatParticipantCountOrderByAggregateInputObjectSchema } from './ChatParticipantCountOrderByAggregateInput.schema';
import { ChatParticipantAvgOrderByAggregateInputObjectSchema } from './ChatParticipantAvgOrderByAggregateInput.schema';
import { ChatParticipantMaxOrderByAggregateInputObjectSchema } from './ChatParticipantMaxOrderByAggregateInput.schema';
import { ChatParticipantMinOrderByAggregateInputObjectSchema } from './ChatParticipantMinOrderByAggregateInput.schema';
import { ChatParticipantSumOrderByAggregateInputObjectSchema } from './ChatParticipantSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantOrderByWithAggregationInput> = z
  .object({
    chatId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ChatParticipantCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ChatParticipantAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ChatParticipantMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ChatParticipantMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ChatParticipantSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatParticipantOrderByWithAggregationInputObjectSchema = Schema;
