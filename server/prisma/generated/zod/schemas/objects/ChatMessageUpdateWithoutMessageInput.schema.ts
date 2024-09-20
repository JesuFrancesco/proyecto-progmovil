import { z } from 'zod';
import { ChatUpdateOneRequiredWithoutChatMessageNestedInputObjectSchema } from './ChatUpdateOneRequiredWithoutChatMessageNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateWithoutMessageInput> = z
  .object({
    chat: z
      .lazy(
        () => ChatUpdateOneRequiredWithoutChatMessageNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ChatMessageUpdateWithoutMessageInputObjectSchema = Schema;
