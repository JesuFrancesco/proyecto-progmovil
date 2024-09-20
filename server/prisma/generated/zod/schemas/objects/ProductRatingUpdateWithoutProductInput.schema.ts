import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutProductRatingsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProductRatingsNestedInput.schema';
import { RatingAttachmentUpdateManyWithoutProductRatingNestedInputObjectSchema } from './RatingAttachmentUpdateManyWithoutProductRatingNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUpdateWithoutProductInput> = z
  .object({
    score: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutProductRatingsNestedInputObjectSchema,
      )
      .optional(),
    ratingAttachments: z
      .lazy(
        () =>
          RatingAttachmentUpdateManyWithoutProductRatingNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductRatingUpdateWithoutProductInputObjectSchema = Schema;
