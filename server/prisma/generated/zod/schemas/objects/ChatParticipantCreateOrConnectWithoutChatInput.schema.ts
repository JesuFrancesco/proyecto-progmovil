import { z } from 'zod';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantCreateWithoutChatInputObjectSchema } from './ChatParticipantCreateWithoutChatInput.schema';
import { ChatParticipantUncheckedCreateWithoutChatInputObjectSchema } from './ChatParticipantUncheckedCreateWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantCreateOrConnectWithoutChatInput> =
  z
    .object({
      where: z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ChatParticipantCreateWithoutChatInputObjectSchema),
        z.lazy(
          () => ChatParticipantUncheckedCreateWithoutChatInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatParticipantCreateOrConnectWithoutChatInputObjectSchema =
  Schema;
