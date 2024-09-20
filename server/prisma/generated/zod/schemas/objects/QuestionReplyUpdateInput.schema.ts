import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductQuestionUpdateOneRequiredWithoutQuestionRepliesNestedInputObjectSchema } from './ProductQuestionUpdateOneRequiredWithoutQuestionRepliesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyUpdateInput> = z
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
    productQuestion: z
      .lazy(
        () =>
          ProductQuestionUpdateOneRequiredWithoutQuestionRepliesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionReplyUpdateInputObjectSchema = Schema;
