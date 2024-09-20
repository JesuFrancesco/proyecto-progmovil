import { z } from 'zod';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantUpdateWithoutChatInputObjectSchema } from './ChatParticipantUpdateWithoutChatInput.schema';
import { ChatParticipantUncheckedUpdateWithoutChatInputObjectSchema } from './ChatParticipantUncheckedUpdateWithoutChatInput.schema';
import { ChatParticipantCreateWithoutChatInputObjectSchema } from './ChatParticipantCreateWithoutChatInput.schema';
import { ChatParticipantUncheckedCreateWithoutChatInputObjectSchema } from './ChatParticipantUncheckedCreateWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpsertWithWhereUniqueWithoutChatInput> =
  z
    .object({
      where: z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ChatParticipantUpdateWithoutChatInputObjectSchema),
        z.lazy(
          () => ChatParticipantUncheckedUpdateWithoutChatInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ChatParticipantCreateWithoutChatInputObjectSchema),
        z.lazy(
          () => ChatParticipantUncheckedCreateWithoutChatInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatParticipantUpsertWithWhereUniqueWithoutChatInputObjectSchema =
  Schema;
