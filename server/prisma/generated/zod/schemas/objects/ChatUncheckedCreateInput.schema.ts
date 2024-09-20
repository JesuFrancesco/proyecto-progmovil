import { z } from 'zod';
import { ChatMessageUncheckedCreateNestedManyWithoutChatInputObjectSchema } from './ChatMessageUncheckedCreateNestedManyWithoutChatInput.schema';
import { ChatParticipantUncheckedCreateNestedManyWithoutChatInputObjectSchema } from './ChatParticipantUncheckedCreateNestedManyWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date(),
    chatMessage: z
      .lazy(
        () => ChatMessageUncheckedCreateNestedManyWithoutChatInputObjectSchema,
      )
      .optional(),
    chatParticipants: z
      .lazy(
        () =>
          ChatParticipantUncheckedCreateNestedManyWithoutChatInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ChatUncheckedCreateInputObjectSchema = Schema;
