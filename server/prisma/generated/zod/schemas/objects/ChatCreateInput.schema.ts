import { z } from 'zod';
import { ChatMessageCreateNestedManyWithoutChatInputObjectSchema } from './ChatMessageCreateNestedManyWithoutChatInput.schema';
import { ChatParticipantCreateNestedManyWithoutChatInputObjectSchema } from './ChatParticipantCreateNestedManyWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatCreateInput> = z
  .object({
    createdAt: z.coerce.date(),
    chatMessage: z
      .lazy(() => ChatMessageCreateNestedManyWithoutChatInputObjectSchema)
      .optional(),
    chatParticipants: z
      .lazy(() => ChatParticipantCreateNestedManyWithoutChatInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatCreateInputObjectSchema = Schema;
