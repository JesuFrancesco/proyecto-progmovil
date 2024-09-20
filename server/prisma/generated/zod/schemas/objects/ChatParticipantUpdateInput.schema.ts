import { z } from 'zod';
import { ChatUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema } from './ChatUpdateOneRequiredWithoutChatParticipantsNestedInput.schema';
import { UserUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutChatParticipantsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpdateInput> = z
  .object({
    chat: z
      .lazy(
        () =>
          ChatUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema,
      )
      .optional(),
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ChatParticipantUpdateInputObjectSchema = Schema;
