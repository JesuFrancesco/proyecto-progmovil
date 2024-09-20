import { z } from 'zod';
import { ChatParticipantCreateWithoutChatInputObjectSchema } from './ChatParticipantCreateWithoutChatInput.schema';
import { ChatParticipantUncheckedCreateWithoutChatInputObjectSchema } from './ChatParticipantUncheckedCreateWithoutChatInput.schema';
import { ChatParticipantCreateOrConnectWithoutChatInputObjectSchema } from './ChatParticipantCreateOrConnectWithoutChatInput.schema';
import { ChatParticipantUpsertWithWhereUniqueWithoutChatInputObjectSchema } from './ChatParticipantUpsertWithWhereUniqueWithoutChatInput.schema';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantUpdateWithWhereUniqueWithoutChatInputObjectSchema } from './ChatParticipantUpdateWithWhereUniqueWithoutChatInput.schema';
import { ChatParticipantUpdateManyWithWhereWithoutChatInputObjectSchema } from './ChatParticipantUpdateManyWithWhereWithoutChatInput.schema';
import { ChatParticipantScalarWhereInputObjectSchema } from './ChatParticipantScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUncheckedUpdateManyWithoutChatNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ChatParticipantUpsertWithWhereUniqueWithoutChatInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ChatParticipantUpsertWithWhereUniqueWithoutChatInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ChatParticipantUpdateWithWhereUniqueWithoutChatInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ChatParticipantUpdateWithWhereUniqueWithoutChatInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ChatParticipantUpdateManyWithWhereWithoutChatInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ChatParticipantUpdateManyWithWhereWithoutChatInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ChatParticipantScalarWhereInputObjectSchema),
          z.lazy(() => ChatParticipantScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChatParticipantUncheckedUpdateManyWithoutChatNestedInputObjectSchema =
  Schema;
