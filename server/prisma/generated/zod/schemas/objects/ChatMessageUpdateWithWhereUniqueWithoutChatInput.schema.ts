import { z } from 'zod';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithoutChatInputObjectSchema } from './ChatMessageUpdateWithoutChatInput.schema';
import { ChatMessageUncheckedUpdateWithoutChatInputObjectSchema } from './ChatMessageUncheckedUpdateWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateWithWhereUniqueWithoutChatInput> =
  z
    .object({
      where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ChatMessageUpdateWithoutChatInputObjectSchema),
        z.lazy(() => ChatMessageUncheckedUpdateWithoutChatInputObjectSchema),
      ]),
    })
    .strict();

export const ChatMessageUpdateWithWhereUniqueWithoutChatInputObjectSchema =
  Schema;
