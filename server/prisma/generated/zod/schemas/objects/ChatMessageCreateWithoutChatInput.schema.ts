import { z } from 'zod';
import { MessageCreateNestedOneWithoutChatMessagesInputObjectSchema } from './MessageCreateNestedOneWithoutChatMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageCreateWithoutChatInput> = z
  .object({
    message: z.lazy(
      () => MessageCreateNestedOneWithoutChatMessagesInputObjectSchema,
    ),
  })
  .strict();

export const ChatMessageCreateWithoutChatInputObjectSchema = Schema;
