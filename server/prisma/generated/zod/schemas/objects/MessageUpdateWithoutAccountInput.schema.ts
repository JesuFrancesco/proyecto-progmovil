import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MessageAttachmentUpdateManyWithoutMessageNestedInputObjectSchema } from './MessageAttachmentUpdateManyWithoutMessageNestedInput.schema';
import { ChatMessageUpdateManyWithoutMessageNestedInputObjectSchema } from './ChatMessageUpdateManyWithoutMessageNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithoutAccountInput> = z
  .object({
    text: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    messageAttachments: z
      .lazy(
        () => MessageAttachmentUpdateManyWithoutMessageNestedInputObjectSchema,
      )
      .optional(),
    chatMessages: z
      .lazy(() => ChatMessageUpdateManyWithoutMessageNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageUpdateWithoutAccountInputObjectSchema = Schema;
