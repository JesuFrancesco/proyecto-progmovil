import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageAvgAggregateInputType> = z
  .object({
    chatId: z.literal(true).optional(),
    messageId: z.literal(true).optional(),
  })
  .strict();

export const ChatMessageAvgAggregateInputObjectSchema = Schema;
