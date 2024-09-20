import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChatMessageUpdateManyWithoutChatNestedInputObjectSchema } from './ChatMessageUpdateManyWithoutChatNestedInput.schema';
import { ChatParticipantUpdateManyWithoutChatNestedInputObjectSchema } from './ChatParticipantUpdateManyWithoutChatNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUpdateInput> = z
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
    chatParticipants: z
      .lazy(() => ChatParticipantUpdateManyWithoutChatNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatUpdateInputObjectSchema = Schema;
