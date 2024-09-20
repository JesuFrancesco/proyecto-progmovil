import { z } from 'zod';
import { ChatCreateNestedOneWithoutChatParticipantsInputObjectSchema } from './ChatCreateNestedOneWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantCreateWithoutUserInput> = z
  .object({
    chat: z.lazy(
      () => ChatCreateNestedOneWithoutChatParticipantsInputObjectSchema,
    ),
  })
  .strict();

export const ChatParticipantCreateWithoutUserInputObjectSchema = Schema;
