import { z } from 'zod';
import { ChatMessageCreateWithoutChatInputObjectSchema } from './ChatMessageCreateWithoutChatInput.schema';
import { ChatMessageUncheckedCreateWithoutChatInputObjectSchema } from './ChatMessageUncheckedCreateWithoutChatInput.schema';
import { ChatMessageCreateOrConnectWithoutChatInputObjectSchema } from './ChatMessageCreateOrConnectWithoutChatInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageCreateNestedManyWithoutChatInput> = z
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
    connect: z
      .union([
        z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
        z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ChatMessageCreateNestedManyWithoutChatInputObjectSchema = Schema;
