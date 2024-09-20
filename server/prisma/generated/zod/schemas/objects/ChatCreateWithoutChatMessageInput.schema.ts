import { z } from 'zod';
import { ChatParticipantCreateNestedManyWithoutChatInputObjectSchema } from './ChatParticipantCreateNestedManyWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatCreateWithoutChatMessageInput> = z
  .object({
    createdAt: z.coerce.date(),
    chatParticipants: z
      .lazy(() => ChatParticipantCreateNestedManyWithoutChatInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatCreateWithoutChatMessageInputObjectSchema = Schema;
