import { z } from 'zod';
import { ChatUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema } from './ChatUpdateOneRequiredWithoutChatParticipantsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpdateWithoutUserInput> = z
  .object({
    chat: z
      .lazy(
        () =>
          ChatUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ChatParticipantUpdateWithoutUserInputObjectSchema = Schema;
