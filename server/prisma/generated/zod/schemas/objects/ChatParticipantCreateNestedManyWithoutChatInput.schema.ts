import { z } from 'zod';
import { ChatParticipantCreateWithoutChatInputObjectSchema } from './ChatParticipantCreateWithoutChatInput.schema';
import { ChatParticipantUncheckedCreateWithoutChatInputObjectSchema } from './ChatParticipantUncheckedCreateWithoutChatInput.schema';
import { ChatParticipantCreateOrConnectWithoutChatInputObjectSchema } from './ChatParticipantCreateOrConnectWithoutChatInput.schema';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantCreateNestedManyWithoutChatInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChatParticipantCreateWithoutChatInputObjectSchema),
          z
            .lazy(() => ChatParticipantCreateWithoutChatInputObjectSchema)
            .array(),
          z.lazy(
            () => ChatParticipantUncheckedCreateWithoutChatInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatParticipantUncheckedCreateWithoutChatInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ChatParticipantCreateOrConnectWithoutChatInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatParticipantCreateOrConnectWithoutChatInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChatParticipantCreateNestedManyWithoutChatInputObjectSchema =
  Schema;
