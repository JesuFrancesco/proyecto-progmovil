import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageSumAggregateInputType> = z
  .object({
    chatId: z.literal(true).optional(),
    messageId: z.literal(true).optional(),
  })
  .strict();

export const ChatMessageSumAggregateInputObjectSchema = Schema;
