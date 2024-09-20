import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentUncheckedUpdateManyWithoutProductAttachmentsInput> =
  z
    .object({
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductAttachmentUncheckedUpdateManyWithoutProductAttachmentsInputObjectSchema =
  Schema;
