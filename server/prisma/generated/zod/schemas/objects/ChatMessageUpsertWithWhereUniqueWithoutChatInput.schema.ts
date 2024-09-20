import { z } from 'zod';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithoutChatInputObjectSchema } from './ChatMessageUpdateWithoutChatInput.schema';
import { ChatMessageUncheckedUpdateWithoutChatInputObjectSchema } from './ChatMessageUncheckedUpdateWithoutChatInput.schema';
import { ChatMessageCreateWithoutChatInputObjectSchema } from './ChatMessageCreateWithoutChatInput.schema';
import { ChatMessageUncheckedCreateWithoutChatInputObjectSchema } from './ChatMessageUncheckedCreateWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpsertWithWhereUniqueWithoutChatInput> =
  z
    .object({
      where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ChatMessageUpdateWithoutChatInputObjectSchema),
        z.lazy(() => ChatMessageUncheckedUpdateWithoutChatInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ChatMessageCreateWithoutChatInputObjectSchema),
        z.lazy(() => ChatMessageUncheckedCreateWithoutChatInputObjectSchema),
      ]),
    })
    .strict();

export const ChatMessageUpsertWithWhereUniqueWithoutChatInputObjectSchema =
  Schema;
