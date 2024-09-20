import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantCountAggregateInputType> = z
  .object({
    chatId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ChatParticipantCountAggregateInputObjectSchema = Schema;
