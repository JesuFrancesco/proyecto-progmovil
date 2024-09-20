import { z } from 'zod';
import { ChatMessageChatIdMessageIdCompoundUniqueInputObjectSchema } from './ChatMessageChatIdMessageIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageWhereUniqueInput> = z
  .object({
    chatId_messageId: z
      .lazy(() => ChatMessageChatIdMessageIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatMessageWhereUniqueInputObjectSchema = Schema;
