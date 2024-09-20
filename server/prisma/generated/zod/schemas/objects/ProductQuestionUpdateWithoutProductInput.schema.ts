import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutProductQuestionsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProductQuestionsNestedInput.schema';
import { QuestionReplyUpdateManyWithoutProductQuestionNestedInputObjectSchema } from './QuestionReplyUpdateManyWithoutProductQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUpdateWithoutProductInput> = z
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
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutProductQuestionsNestedInputObjectSchema,
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

export const ProductQuestionUpdateWithoutProductInputObjectSchema = Schema;
