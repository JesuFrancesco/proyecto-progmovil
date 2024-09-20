import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageCountOrderByAggregateInput> = z
  .object({
    chatId: z.lazy(() => SortOrderSchema).optional(),
    messageId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ChatMessageCountOrderByAggregateInputObjectSchema = Schema;
