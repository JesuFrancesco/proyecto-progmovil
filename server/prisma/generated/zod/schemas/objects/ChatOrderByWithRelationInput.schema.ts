import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ChatMessageOrderByRelationAggregateInputObjectSchema } from './ChatMessageOrderByRelationAggregateInput.schema';
import { ChatParticipantOrderByRelationAggregateInputObjectSchema } from './ChatParticipantOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    chatMessage: z
      .lazy(() => ChatMessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    chatParticipants: z
      .lazy(() => ChatParticipantOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatOrderByWithRelationInputObjectSchema = Schema;
