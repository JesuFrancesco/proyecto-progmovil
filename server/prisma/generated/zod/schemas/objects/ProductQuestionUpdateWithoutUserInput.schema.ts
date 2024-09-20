import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutProductQuestionsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutProductQuestionsNestedInput.schema';
import { QuestionReplyUpdateManyWithoutProductQuestionNestedInputObjectSchema } from './QuestionReplyUpdateManyWithoutProductQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUpdateWithoutUserInput> = z
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
    product: z
      .lazy(
        () =>
          ProductUpdateOneRequiredWithoutProductQuestionsNestedInputObjectSchema,
      )
      .optional(),
    questionReplies: z
      .lazy(
        () =>
          QuestionReplyUpdateManyWithoutProductQuestionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductQuestionUpdateWithoutUserInputObjectSchema = Schema;
