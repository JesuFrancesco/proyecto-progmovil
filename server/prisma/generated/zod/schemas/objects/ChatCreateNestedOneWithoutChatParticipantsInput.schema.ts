import { z } from 'zod';
import { ChatCreateWithoutChatParticipantsInputObjectSchema } from './ChatCreateWithoutChatParticipantsInput.schema';
import { ChatUncheckedCreateWithoutChatParticipantsInputObjectSchema } from './ChatUncheckedCreateWithoutChatParticipantsInput.schema';
import { ChatCreateOrConnectWithoutChatParticipantsInputObjectSchema } from './ChatCreateOrConnectWithoutChatParticipantsInput.schema';
import { ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatCreateNestedOneWithoutChatParticipantsInput> =
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
      connect: z.lazy(() => ChatWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ChatCreateNestedOneWithoutChatParticipantsInputObjectSchema =
  Schema;
