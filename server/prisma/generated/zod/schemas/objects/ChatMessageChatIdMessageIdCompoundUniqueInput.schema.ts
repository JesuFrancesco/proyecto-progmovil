import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageChatIdMessageIdCompoundUniqueInput> =
  z
    .object({
      chatId: z.number(),
      messageId: z.number(),
    })
    .strict();

export const ChatMessageChatIdMessageIdCompoundUniqueInputObjectSchema = Schema;
