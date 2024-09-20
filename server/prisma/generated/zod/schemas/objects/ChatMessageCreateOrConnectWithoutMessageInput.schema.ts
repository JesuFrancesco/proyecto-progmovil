import { z } from 'zod';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageCreateWithoutMessageInputObjectSchema } from './ChatMessageCreateWithoutMessageInput.schema';
import { ChatMessageUncheckedCreateWithoutMessageInputObjectSchema } from './ChatMessageUncheckedCreateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageCreateOrConnectWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ChatMessageCreateWithoutMessageInputObjectSchema),
        z.lazy(() => ChatMessageUncheckedCreateWithoutMessageInputObjectSchema),
      ]),
    })
    .strict();

export const ChatMessageCreateOrConnectWithoutMessageInputObjectSchema = Schema;
