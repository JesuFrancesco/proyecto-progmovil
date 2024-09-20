import { z } from 'zod';
import { ChatParticipantScalarWhereInputObjectSchema } from './ChatParticipantScalarWhereInput.schema';
import { ChatParticipantUpdateManyMutationInputObjectSchema } from './ChatParticipantUpdateManyMutationInput.schema';
import { ChatParticipantUncheckedUpdateManyWithoutChatParticipantsInputObjectSchema } from './ChatParticipantUncheckedUpdateManyWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpdateManyWithWhereWithoutChatInput> =
  z
    .object({
      where: z.lazy(() => ChatParticipantScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ChatParticipantUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ChatParticipantUncheckedUpdateManyWithoutChatParticipantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatParticipantUpdateManyWithWhereWithoutChatInputObjectSchema =
  Schema;
