import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUncheckedCreateInput> = z
  .object({
    chatId: z.number(),
    userId: z.number(),
  })
  .strict();

export const ChatParticipantUncheckedCreateInputObjectSchema = Schema;
