import { z } from 'zod';
import { ChatCreateNestedOneWithoutChatMessageInputObjectSchema } from './ChatCreateNestedOneWithoutChatMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageCreateWithoutMessageInput> = z
  .object({
    chat: z.lazy(() => ChatCreateNestedOneWithoutChatMessageInputObjectSchema),
  })
  .strict();

export const ChatMessageCreateWithoutMessageInputObjectSchema = Schema;
