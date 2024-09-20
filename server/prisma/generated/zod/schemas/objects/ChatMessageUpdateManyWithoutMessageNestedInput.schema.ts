import { z } from 'zod';
import { ChatMessageCreateWithoutMessageInputObjectSchema } from './ChatMessageCreateWithoutMessageInput.schema';
import { ChatMessageUncheckedCreateWithoutMessageInputObjectSchema } from './ChatMessageUncheckedCreateWithoutMessageInput.schema';
import { ChatMessageCreateOrConnectWithoutMessageInputObjectSchema } from './ChatMessageCreateOrConnectWithoutMessageInput.schema';
import { ChatMessageUpsertWithWhereUniqueWithoutMessageInputObjectSchema } from './ChatMessageUpsertWithWhereUniqueWithoutMessageInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithWhereUniqueWithoutMessageInputObjectSchema } from './ChatMessageUpdateWithWhereUniqueWithoutMessageInput.schema';
import { ChatMessageUpdateManyWithWhereWithoutMessageInputObjectSchema } from './ChatMessageUpdateManyWithWhereWithoutMessageInput.schema';
import { ChatMessageScalarWhereInputObjectSchema } from './ChatMessageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateManyWithoutMessageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChatMessageCreateWithoutMessageInputObjectSchema),
          z
            .lazy(() => ChatMessageCreateWithoutMessageInputObjectSchema)
            .array(),
          z.lazy(
            () => ChatMessageUncheckedCreateWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatMessageUncheckedCreateWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ChatMessageCreateOrConnectWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatMessageCreateOrConnectWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ChatMessageUpsertWithWhereUniqueWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ChatMessageUpsertWithWhereUniqueWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ChatMessageUpdateWithWhereUniqueWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ChatMessageUpdateWithWhereUniqueWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ChatMessageUpdateManyWithWhereWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ChatMessageUpdateManyWithWhereWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ChatMessageScalarWhereInputObjectSchema),
          z.lazy(() => ChatMessageScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChatMessageUpdateManyWithoutMessageNestedInputObjectSchema =
  Schema;
