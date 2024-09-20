import { z } from 'zod';
import { UserUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutChatParticipantsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpdateWithoutChatInput> = z
  .object({
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ChatParticipantUpdateWithoutChatInputObjectSchema = Schema;
