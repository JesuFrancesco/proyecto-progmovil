import { z } from 'zod';
import { UserCreateNestedOneWithoutProductQuestionsInputObjectSchema } from './UserCreateNestedOneWithoutProductQuestionsInput.schema';
import { QuestionReplyCreateNestedManyWithoutProductQuestionInputObjectSchema } from './QuestionReplyCreateNestedManyWithoutProductQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateWithoutProductInput> = z
  .object({
    text: z.string(),
    createdAt: z.coerce.date(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutProductQuestionsInputObjectSchema,
    ),
    questionReplies: z
      .lazy(
        () =>
          QuestionReplyCreateNestedManyWithoutProductQuestionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductQuestionCreateWithoutProductInputObjectSchema = Schema;
