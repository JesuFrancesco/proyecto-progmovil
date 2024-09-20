import { z } from 'zod';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithoutMessageInputObjectSchema } from './ChatMessageUpdateWithoutMessageInput.schema';
import { ChatMessageUncheckedUpdateWithoutMessageInputObjectSchema } from './ChatMessageUncheckedUpdateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateWithWhereUniqueWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ChatMessageUpdateWithoutMessageInputObjectSchema),
        z.lazy(() => ChatMessageUncheckedUpdateWithoutMessageInputObjectSchema),
      ]),
    })
    .strict();

export const ChatMessageUpdateWithWhereUniqueWithoutMessageInputObjectSchema =
  Schema;
