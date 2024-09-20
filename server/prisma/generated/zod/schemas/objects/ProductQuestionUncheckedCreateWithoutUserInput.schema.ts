import { z } from 'zod';
import { QuestionReplyUncheckedCreateNestedManyWithoutProductQuestionInputObjectSchema } from './QuestionReplyUncheckedCreateNestedManyWithoutProductQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.number().optional(),
      text: z.string(),
      createdAt: z.coerce.date(),
      productId: z.number(),
      questionReplies: z
        .lazy(
          () =>
            QuestionReplyUncheckedCreateNestedManyWithoutProductQuestionInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProductQuestionUncheckedCreateWithoutUserInputObjectSchema =
  Schema;
