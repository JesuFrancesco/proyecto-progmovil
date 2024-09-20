import { z } from 'zod';
import { ChatMessageCreateNestedManyWithoutChatInputObjectSchema } from './ChatMessageCreateNestedManyWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatCreateWithoutChatParticipantsInput> = z
  .object({
    createdAt: z.coerce.date(),
    chatMessage: z
      .lazy(() => ChatMessageCreateNestedManyWithoutChatInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatCreateWithoutChatParticipantsInputObjectSchema = Schema;
