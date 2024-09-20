import { z } from 'zod';
import { ChatCreateWithoutChatParticipantsInputObjectSchema } from './ChatCreateWithoutChatParticipantsInput.schema';
import { ChatUncheckedCreateWithoutChatParticipantsInputObjectSchema } from './ChatUncheckedCreateWithoutChatParticipantsInput.schema';
import { ChatCreateOrConnectWithoutChatParticipantsInputObjectSchema } from './ChatCreateOrConnectWithoutChatParticipantsInput.schema';
import { ChatUpsertWithoutChatParticipantsInputObjectSchema } from './ChatUpsertWithoutChatParticipantsInput.schema';
import { ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';
import { ChatUpdateWithoutChatParticipantsInputObjectSchema } from './ChatUpdateWithoutChatParticipantsInput.schema';
import { ChatUncheckedUpdateWithoutChatParticipantsInputObjectSchema } from './ChatUncheckedUpdateWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUpdateOneRequiredWithoutChatParticipantsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChatCreateWithoutChatParticipantsInputObjectSchema),
          z.lazy(
            () => ChatUncheckedCreateWithoutChatParticipantsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ChatCreateOrConnectWithoutChatParticipantsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ChatUpsertWithoutChatParticipantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ChatWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ChatUpdateWithoutChatParticipantsInputObjectSchema),
          z.lazy(
            () => ChatUncheckedUpdateWithoutChatParticipantsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ChatUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema =
  Schema;
