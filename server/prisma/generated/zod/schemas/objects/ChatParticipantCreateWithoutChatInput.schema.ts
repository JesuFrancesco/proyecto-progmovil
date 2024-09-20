import { z } from 'zod';
import { UserCreateNestedOneWithoutChatParticipantsInputObjectSchema } from './UserCreateNestedOneWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantCreateWithoutChatInput> = z
  .object({
    user: z.lazy(
      () => UserCreateNestedOneWithoutChatParticipantsInputObjectSchema,
    ),
  })
  .strict();

export const ChatParticipantCreateWithoutChatInputObjectSchema = Schema;
