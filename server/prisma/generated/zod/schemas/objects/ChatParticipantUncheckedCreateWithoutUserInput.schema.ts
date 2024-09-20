import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUncheckedCreateWithoutUserInput> =
  z
    .object({
      chatId: z.number(),
    })
    .strict();

export const ChatParticipantUncheckedCreateWithoutUserInputObjectSchema =
  Schema;
