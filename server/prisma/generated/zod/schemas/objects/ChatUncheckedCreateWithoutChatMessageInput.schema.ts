import { z } from 'zod';
import { ChatParticipantUncheckedCreateNestedManyWithoutChatInputObjectSchema } from './ChatParticipantUncheckedCreateNestedManyWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUncheckedCreateWithoutChatMessageInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date(),
    chatParticipants: z
      .lazy(
        () =>
          ChatParticipantUncheckedCreateNestedManyWithoutChatInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ChatUncheckedCreateWithoutChatMessageInputObjectSchema = Schema;
