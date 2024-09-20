import { z } from 'zod';
import { ChatUpdateWithoutChatParticipantsInputObjectSchema } from './ChatUpdateWithoutChatParticipantsInput.schema';
import { ChatUncheckedUpdateWithoutChatParticipantsInputObjectSchema } from './ChatUncheckedUpdateWithoutChatParticipantsInput.schema';
import { ChatCreateWithoutChatParticipantsInputObjectSchema } from './ChatCreateWithoutChatParticipantsInput.schema';
import { ChatUncheckedCreateWithoutChatParticipantsInputObjectSchema } from './ChatUncheckedCreateWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUpsertWithoutChatParticipantsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ChatUpdateWithoutChatParticipantsInputObjectSchema),
      z.lazy(() => ChatUncheckedUpdateWithoutChatParticipantsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ChatCreateWithoutChatParticipantsInputObjectSchema),
      z.lazy(() => ChatUncheckedCreateWithoutChatParticipantsInputObjectSchema),
    ]),
  })
  .strict();

export const ChatUpsertWithoutChatParticipantsInputObjectSchema = Schema;
