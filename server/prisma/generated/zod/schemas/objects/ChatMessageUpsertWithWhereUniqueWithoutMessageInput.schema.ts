import { z } from 'zod';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithoutMessageInputObjectSchema } from './ChatMessageUpdateWithoutMessageInput.schema';
import { ChatMessageUncheckedUpdateWithoutMessageInputObjectSchema } from './ChatMessageUncheckedUpdateWithoutMessageInput.schema';
import { ChatMessageCreateWithoutMessageInputObjectSchema } from './ChatMessageCreateWithoutMessageInput.schema';
import { ChatMessageUncheckedCreateWithoutMessageInputObjectSchema } from './ChatMessageUncheckedCreateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpsertWithWhereUniqueWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ChatMessageUpdateWithoutMessageInputObjectSchema),
        z.lazy(() => ChatMessageUncheckedUpdateWithoutMessageInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ChatMessageCreateWithoutMessageInputObjectSchema),
        z.lazy(() => ChatMessageUncheckedCreateWithoutMessageInputObjectSchema),
      ]),
    })
    .strict();

export const ChatMessageUpsertWithWhereUniqueWithoutMessageInputObjectSchema =
  Schema;
