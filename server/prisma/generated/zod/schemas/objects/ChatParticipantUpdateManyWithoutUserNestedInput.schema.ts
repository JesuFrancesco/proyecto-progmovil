import { z } from 'zod';
import { ChatParticipantCreateWithoutUserInputObjectSchema } from './ChatParticipantCreateWithoutUserInput.schema';
import { ChatParticipantUncheckedCreateWithoutUserInputObjectSchema } from './ChatParticipantUncheckedCreateWithoutUserInput.schema';
import { ChatParticipantCreateOrConnectWithoutUserInputObjectSchema } from './ChatParticipantCreateOrConnectWithoutUserInput.schema';
import { ChatParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ChatParticipantUpsertWithWhereUniqueWithoutUserInput.schema';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ChatParticipantUpdateWithWhereUniqueWithoutUserInput.schema';
import { ChatParticipantUpdateManyWithWhereWithoutUserInputObjectSchema } from './ChatParticipantUpdateManyWithWhereWithoutUserInput.schema';
import { ChatParticipantScalarWhereInputObjectSchema } from './ChatParticipantScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChatParticipantCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ChatParticipantCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ChatParticipantUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatParticipantUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ChatParticipantCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatParticipantCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ChatParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ChatParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema,
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
              ChatParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ChatParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ChatParticipantUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ChatParticipantUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const ChatParticipantUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
