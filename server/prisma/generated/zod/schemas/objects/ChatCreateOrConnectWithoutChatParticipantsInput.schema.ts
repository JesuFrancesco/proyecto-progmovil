import { z } from 'zod';
import { ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';
import { ChatCreateWithoutChatParticipantsInputObjectSchema } from './ChatCreateWithoutChatParticipantsInput.schema';
import { ChatUncheckedCreateWithoutChatParticipantsInputObjectSchema } from './ChatUncheckedCreateWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatCreateOrConnectWithoutChatParticipantsInput> =
  z
    .object({
      where: z.lazy(() => ChatWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ChatCreateWithoutChatParticipantsInputObjectSchema),
        z.lazy(
          () => ChatUncheckedCreateWithoutChatParticipantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatCreateOrConnectWithoutChatParticipantsInputObjectSchema =
  Schema;
