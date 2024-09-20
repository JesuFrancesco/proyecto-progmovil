import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantMinOrderByAggregateInput> = z
  .object({
    chatId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ChatParticipantMinOrderByAggregateInputObjectSchema = Schema;
