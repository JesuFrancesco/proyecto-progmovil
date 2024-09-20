import { z } from 'zod';
import { ChatUpdateWithoutChatMessageInputObjectSchema } from './ChatUpdateWithoutChatMessageInput.schema';
import { ChatUncheckedUpdateWithoutChatMessageInputObjectSchema } from './ChatUncheckedUpdateWithoutChatMessageInput.schema';
import { ChatCreateWithoutChatMessageInputObjectSchema } from './ChatCreateWithoutChatMessageInput.schema';
import { ChatUncheckedCreateWithoutChatMessageInputObjectSchema } from './ChatUncheckedCreateWithoutChatMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUpsertWithoutChatMessageInput> = z
  .object({
    update: z.union([
      z.lazy(() => ChatUpdateWithoutChatMessageInputObjectSchema),
      z.lazy(() => ChatUncheckedUpdateWithoutChatMessageInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ChatCreateWithoutChatMessageInputObjectSchema),
      z.lazy(() => ChatUncheckedCreateWithoutChatMessageInputObjectSchema),
    ]),
  })
  .strict();

export const ChatUpsertWithoutChatMessageInputObjectSchema = Schema;
