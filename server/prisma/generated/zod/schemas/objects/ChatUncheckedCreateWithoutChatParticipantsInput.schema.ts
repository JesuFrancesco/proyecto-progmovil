import { z } from 'zod';
import { ChatMessageUncheckedCreateNestedManyWithoutChatInputObjectSchema } from './ChatMessageUncheckedCreateNestedManyWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUncheckedCreateWithoutChatParticipantsInput> =
  z
    .object({
      id: z.number().optional(),
      createdAt: z.coerce.date(),
      chatMessage: z
        .lazy(
          () =>
            ChatMessageUncheckedCreateNestedManyWithoutChatInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ChatUncheckedCreateWithoutChatParticipantsInputObjectSchema =
  Schema;
