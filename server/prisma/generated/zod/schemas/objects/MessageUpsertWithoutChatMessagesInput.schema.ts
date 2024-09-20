import { z } from 'zod';
import { MessageUpdateWithoutChatMessagesInputObjectSchema } from './MessageUpdateWithoutChatMessagesInput.schema';
import { MessageUncheckedUpdateWithoutChatMessagesInputObjectSchema } from './MessageUncheckedUpdateWithoutChatMessagesInput.schema';
import { MessageCreateWithoutChatMessagesInputObjectSchema } from './MessageCreateWithoutChatMessagesInput.schema';
import { MessageUncheckedCreateWithoutChatMessagesInputObjectSchema } from './MessageUncheckedCreateWithoutChatMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithoutChatMessagesInput> = z
  .object({
    update: z.union([
      z.lazy(() => MessageUpdateWithoutChatMessagesInputObjectSchema),
      z.lazy(() => MessageUncheckedUpdateWithoutChatMessagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MessageCreateWithoutChatMessagesInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutChatMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const MessageUpsertWithoutChatMessagesInputObjectSchema = Schema;
