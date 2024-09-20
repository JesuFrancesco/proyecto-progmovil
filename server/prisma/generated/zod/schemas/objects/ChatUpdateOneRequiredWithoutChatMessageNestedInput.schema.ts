import { z } from 'zod';
import { ChatCreateWithoutChatMessageInputObjectSchema } from './ChatCreateWithoutChatMessageInput.schema';
import { ChatUncheckedCreateWithoutChatMessageInputObjectSchema } from './ChatUncheckedCreateWithoutChatMessageInput.schema';
import { ChatCreateOrConnectWithoutChatMessageInputObjectSchema } from './ChatCreateOrConnectWithoutChatMessageInput.schema';
import { ChatUpsertWithoutChatMessageInputObjectSchema } from './ChatUpsertWithoutChatMessageInput.schema';
import { ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';
import { ChatUpdateWithoutChatMessageInputObjectSchema } from './ChatUpdateWithoutChatMessageInput.schema';
import { ChatUncheckedUpdateWithoutChatMessageInputObjectSchema } from './ChatUncheckedUpdateWithoutChatMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUpdateOneRequiredWithoutChatMessageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChatCreateWithoutChatMessageInputObjectSchema),
          z.lazy(() => ChatUncheckedCreateWithoutChatMessageInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ChatCreateOrConnectWithoutChatMessageInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ChatUpsertWithoutChatMessageInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ChatWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ChatUpdateWithoutChatMessageInputObjectSchema),
          z.lazy(() => ChatUncheckedUpdateWithoutChatMessageInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ChatUpdateOneRequiredWithoutChatMessageNestedInputObjectSchema =
  Schema;
