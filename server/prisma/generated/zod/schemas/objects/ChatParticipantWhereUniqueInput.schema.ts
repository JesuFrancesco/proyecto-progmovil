import { z } from 'zod';
import { ChatParticipantChatIdUserIdCompoundUniqueInputObjectSchema } from './ChatParticipantChatIdUserIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantWhereUniqueInput> = z
  .object({
    chatId_userId: z
      .lazy(() => ChatParticipantChatIdUserIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatParticipantWhereUniqueInputObjectSchema = Schema;
