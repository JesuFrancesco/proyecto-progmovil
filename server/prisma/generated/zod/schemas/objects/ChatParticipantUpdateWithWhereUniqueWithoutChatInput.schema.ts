import { z } from 'zod';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantUpdateWithoutChatInputObjectSchema } from './ChatParticipantUpdateWithoutChatInput.schema';
import { ChatParticipantUncheckedUpdateWithoutChatInputObjectSchema } from './ChatParticipantUncheckedUpdateWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpdateWithWhereUniqueWithoutChatInput> =
  z
    .object({
      where: z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ChatParticipantUpdateWithoutChatInputObjectSchema),
        z.lazy(
          () => ChatParticipantUncheckedUpdateWithoutChatInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatParticipantUpdateWithWhereUniqueWithoutChatInputObjectSchema =
  Schema;
