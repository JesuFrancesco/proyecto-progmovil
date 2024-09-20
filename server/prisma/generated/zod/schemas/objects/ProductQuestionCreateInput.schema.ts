import { z } from 'zod';
import { ProductCreateNestedOneWithoutProductQuestionsInputObjectSchema } from './ProductCreateNestedOneWithoutProductQuestionsInput.schema';
import { UserCreateNestedOneWithoutProductQuestionsInputObjectSchema } from './UserCreateNestedOneWithoutProductQuestionsInput.schema';
import { QuestionReplyCreateNestedManyWithoutProductQuestionInputObjectSchema } from './QuestionReplyCreateNestedManyWithoutProductQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateInput> = z
  .object({
    text: z.string(),
    createdAt: z.coerce.date(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutProductQuestionsInputObjectSchema,
    ),
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

export const ProductQuestionCreateInputObjectSchema = Schema;
