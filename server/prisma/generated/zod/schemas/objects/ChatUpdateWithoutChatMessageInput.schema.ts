import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChatParticipantUpdateManyWithoutChatNestedInputObjectSchema } from './ChatParticipantUpdateManyWithoutChatNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUpdateWithoutChatMessageInput> = z
  .object({
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    chatParticipants: z
      .lazy(() => ChatParticipantUpdateManyWithoutChatNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChatUpdateWithoutChatMessageInputObjectSchema = Schema;
