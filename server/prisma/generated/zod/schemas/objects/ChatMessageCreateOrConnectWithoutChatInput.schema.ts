import { z } from 'zod';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageCreateWithoutChatInputObjectSchema } from './ChatMessageCreateWithoutChatInput.schema';
import { ChatMessageUncheckedCreateWithoutChatInputObjectSchema } from './ChatMessageUncheckedCreateWithoutChatInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageCreateOrConnectWithoutChatInput> = z
  .object({
    where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ChatMessageCreateWithoutChatInputObjectSchema),
      z.lazy(() => ChatMessageUncheckedCreateWithoutChatInputObjectSchema),
    ]),
  })
  .strict();

export const ChatMessageCreateOrConnectWithoutChatInputObjectSchema = Schema;
