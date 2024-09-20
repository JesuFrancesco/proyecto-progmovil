import { z } from 'zod';
import { ChatMessageCreateWithoutChatInputObjectSchema } from './ChatMessageCreateWithoutChatInput.schema';
import { ChatMessageUncheckedCreateWithoutChatInputObjectSchema } from './ChatMessageUncheckedCreateWithoutChatInput.schema';
import { ChatMessageCreateOrConnectWithoutChatInputObjectSchema } from './ChatMessageCreateOrConnectWithoutChatInput.schema';
import { ChatMessageUpsertWithWhereUniqueWithoutChatInputObjectSchema } from './ChatMessageUpsertWithWhereUniqueWithoutChatInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithWhereUniqueWithoutChatInputObjectSchema } from './ChatMessageUpdateWithWhereUniqueWithoutChatInput.schema';
import { ChatMessageUpdateManyWithWhereWithoutChatInputObjectSchema } from './ChatMessageUpdateManyWithWhereWithoutChatInput.schema';
import { ChatMessageScalarWhereInputObjectSchema } from './ChatMessageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateManyWithoutChatNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ChatMessageCreateWithoutChatInputObjectSchema),
        z.lazy(() => ChatMessageCreateWithoutChatInputObjectSchema).array(),
        z.lazy(() => ChatMessageUncheckedCreateWithoutChatInputObjectSchema),
        z
          .lazy(() => ChatMessageUncheckedCreateWithoutChatInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ChatMessageCreateOrConnectWithoutChatInputObjectSchema),
        z
          .lazy(() => ChatMessageCreateOrConnectWithoutChatInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ChatMessageUpsertWithWhereUniqueWithoutChatInputObjectSchema,
        ),
        z
          .lazy(
            () => ChatMessageUpsertWithWhereUniqueWithoutChatInputObjectSchema,
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
          () => ChatMessageUpdateWithWhereUniqueWithoutChatInputObjectSchema,
        ),
        z
          .lazy(
            () => ChatMessageUpdateWithWhereUniqueWithoutChatInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ChatMessageUpdateManyWithWhereWithoutChatInputObjectSchema,
        ),
        z
          .lazy(
            () => ChatMessageUpdateManyWithWhereWithoutChatInputObjectSchema,
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

export const ChatMessageUpdateManyWithoutChatNestedInputObjectSchema = Schema;
