import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUncheckedCreateWithoutChatInput> = z
  .object({
    messageId: z.number(),
  })
  .strict();

export const ChatMessageUncheckedCreateWithoutChatInputObjectSchema = Schema;
