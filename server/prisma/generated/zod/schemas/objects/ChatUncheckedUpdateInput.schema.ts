import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChatMessageUncheckedUpdateManyWithoutChatNestedInputObjectSchema } from './ChatMessageUncheckedUpdateManyWithoutChatNestedInput.schema';
import { ChatParticipantUncheckedUpdateManyWithoutChatNestedInputObjectSchema } from './ChatParticipantUncheckedUpdateManyWithoutChatNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    chatMessage: z
      .lazy(
        () => ChatMessageUncheckedUpdateManyWithoutChatNestedInputObjectSchema,
      )
      .optional(),
    chatParticipants: z
      .lazy(
        () =>
          ChatParticipantUncheckedUpdateManyWithoutChatNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ChatUncheckedUpdateInputObjectSchema = Schema;
