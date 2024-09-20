import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ChatOrderByWithRelationInputObjectSchema } from './ChatOrderByWithRelationInput.schema';
import { MessageOrderByWithRelationInputObjectSchema } from './MessageOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageOrderByWithRelationInput> = z
  .object({
    chatId: z.lazy(() => SortOrderSchema).optional(),
    messageId: z.lazy(() => SortOrderSchema).optional(),
    chat: z.lazy(() => ChatOrderByWithRelationInputObjectSchema).optional(),
    message: z
      .lazy(() => MessageOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatMessageOrderByWithRelationInputObjectSchema = Schema;
