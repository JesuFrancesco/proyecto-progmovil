import { z } from 'zod';
import { ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';
import { ChatCreateWithoutChatMessageInputObjectSchema } from './ChatCreateWithoutChatMessageInput.schema';
import { ChatUncheckedCreateWithoutChatMessageInputObjectSchema } from './ChatUncheckedCreateWithoutChatMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatCreateOrConnectWithoutChatMessageInput> = z
  .object({
    where: z.lazy(() => ChatWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ChatCreateWithoutChatMessageInputObjectSchema),
      z.lazy(() => ChatUncheckedCreateWithoutChatMessageInputObjectSchema),
    ]),
  })
  .strict();

export const ChatCreateOrConnectWithoutChatMessageInputObjectSchema = Schema;
