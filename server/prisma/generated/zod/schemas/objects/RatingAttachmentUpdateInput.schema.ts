import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductRatingUpdateOneRequiredWithoutRatingAttachmentsNestedInputObjectSchema } from './ProductRatingUpdateOneRequiredWithoutRatingAttachmentsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentUpdateInput> = z
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
    productRating: z
      .lazy(
        () =>
          ProductRatingUpdateOneRequiredWithoutRatingAttachmentsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RatingAttachmentUpdateInputObjectSchema = Schema;
