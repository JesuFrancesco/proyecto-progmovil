import { z } from 'zod';
import { ChatCreateWithoutChatMessageInputObjectSchema } from './ChatCreateWithoutChatMessageInput.schema';
import { ChatUncheckedCreateWithoutChatMessageInputObjectSchema } from './ChatUncheckedCreateWithoutChatMessageInput.schema';
import { ChatCreateOrConnectWithoutChatMessageInputObjectSchema } from './ChatCreateOrConnectWithoutChatMessageInput.schema';
import { ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatCreateNestedOneWithoutChatMessageInput> = z
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
    connect: z.lazy(() => ChatWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ChatCreateNestedOneWithoutChatMessageInputObjectSchema = Schema;
