import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { AccountUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './AccountUpdateOneRequiredWithoutMessagesNestedInput.schema';
import { MessageAttachmentUpdateManyWithoutMessageNestedInputObjectSchema } from './MessageAttachmentUpdateManyWithoutMessageNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithoutChatMessagesInput> = z
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
    account: z
      .lazy(
        () => AccountUpdateOneRequiredWithoutMessagesNestedInputObjectSchema,
      )
      .optional(),
    messageAttachments: z
      .lazy(
        () => MessageAttachmentUpdateManyWithoutMessageNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MessageUpdateWithoutChatMessagesInputObjectSchema = Schema;
