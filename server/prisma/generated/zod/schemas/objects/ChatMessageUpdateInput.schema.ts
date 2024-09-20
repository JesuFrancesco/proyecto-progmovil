import { z } from 'zod';
import { ChatUpdateOneRequiredWithoutChatMessageNestedInputObjectSchema } from './ChatUpdateOneRequiredWithoutChatMessageNestedInput.schema';
import { MessageUpdateOneRequiredWithoutChatMessagesNestedInputObjectSchema } from './MessageUpdateOneRequiredWithoutChatMessagesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateInput> = z
  .object({
    chat: z
      .lazy(
        () => ChatUpdateOneRequiredWithoutChatMessageNestedInputObjectSchema,
      )
      .optional(),
    message: z
      .lazy(
        () =>
          MessageUpdateOneRequiredWithoutChatMessagesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ChatMessageUpdateInputObjectSchema = Schema;
