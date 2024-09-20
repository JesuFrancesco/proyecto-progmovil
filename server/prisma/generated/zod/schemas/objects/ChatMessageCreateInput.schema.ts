import { z } from 'zod';
import { ChatCreateNestedOneWithoutChatMessageInputObjectSchema } from './ChatCreateNestedOneWithoutChatMessageInput.schema';
import { MessageCreateNestedOneWithoutChatMessagesInputObjectSchema } from './MessageCreateNestedOneWithoutChatMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageCreateInput> = z
  .object({
    chat: z.lazy(() => ChatCreateNestedOneWithoutChatMessageInputObjectSchema),
    message: z.lazy(
      () => MessageCreateNestedOneWithoutChatMessagesInputObjectSchema,
    ),
  })
  .strict();

export const ChatMessageCreateInputObjectSchema = Schema;
