import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MessageUpdateOneRequiredWithoutMessageAttachmentsNestedInputObjectSchema } from './MessageUpdateOneRequiredWithoutMessageAttachmentsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentUpdateInput> = z
  .object({
    blobUrl: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    filename: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    message: z
      .lazy(
        () =>
          MessageUpdateOneRequiredWithoutMessageAttachmentsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MessageAttachmentUpdateInputObjectSchema = Schema;
