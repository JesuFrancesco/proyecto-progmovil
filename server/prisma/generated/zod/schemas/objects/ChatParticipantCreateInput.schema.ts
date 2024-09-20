import { z } from 'zod';
import { ChatCreateNestedOneWithoutChatParticipantsInputObjectSchema } from './ChatCreateNestedOneWithoutChatParticipantsInput.schema';
import { UserCreateNestedOneWithoutChatParticipantsInputObjectSchema } from './UserCreateNestedOneWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantCreateInput> = z
  .object({
    chat: z.lazy(
      () => ChatCreateNestedOneWithoutChatParticipantsInputObjectSchema,
    ),
    user: z.lazy(
      () => UserCreateNestedOneWithoutChatParticipantsInputObjectSchema,
    ),
  })
  .strict();

export const ChatParticipantCreateInputObjectSchema = Schema;
