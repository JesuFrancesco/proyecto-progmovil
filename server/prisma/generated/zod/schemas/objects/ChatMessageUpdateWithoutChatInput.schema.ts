import { z } from 'zod';
import { MessageUpdateOneRequiredWithoutChatMessagesNestedInputObjectSchema } from './MessageUpdateOneRequiredWithoutChatMessagesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateWithoutChatInput> = z
  .object({
    message: z
      .lazy(
        () =>
          MessageUpdateOneRequiredWithoutChatMessagesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ChatMessageUpdateWithoutChatInputObjectSchema = Schema;
