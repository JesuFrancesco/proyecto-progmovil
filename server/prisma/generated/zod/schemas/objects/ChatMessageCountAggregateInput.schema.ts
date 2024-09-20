import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageCountAggregateInputType> = z
  .object({
    chatId: z.literal(true).optional(),
    messageId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ChatMessageCountAggregateInputObjectSchema = Schema;
