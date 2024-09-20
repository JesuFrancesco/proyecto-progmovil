import { z } from 'zod';
import { ProductCreateNestedOneWithoutProductQuestionsInputObjectSchema } from './ProductCreateNestedOneWithoutProductQuestionsInput.schema';
import { QuestionReplyCreateNestedManyWithoutProductQuestionInputObjectSchema } from './QuestionReplyCreateNestedManyWithoutProductQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateWithoutUserInput> = z
  .object({
    text: z.string(),
    createdAt: z.coerce.date(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutProductQuestionsInputObjectSchema,
    ),
    questionReplies: z
      .lazy(
        () =>
          QuestionReplyCreateNestedManyWithoutProductQuestionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductQuestionCreateWithoutUserInputObjectSchema = Schema;
