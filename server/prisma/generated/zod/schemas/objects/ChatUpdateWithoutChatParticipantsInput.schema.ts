import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChatMessageUpdateManyWithoutChatNestedInputObjectSchema } from './ChatMessageUpdateManyWithoutChatNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUpdateWithoutChatParticipantsInput> = z
  .object({
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    chatMessage: z
      .lazy(() => ChatMessageUpdateManyWithoutChatNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatUpdateWithoutChatParticipantsInputObjectSchema = Schema;
