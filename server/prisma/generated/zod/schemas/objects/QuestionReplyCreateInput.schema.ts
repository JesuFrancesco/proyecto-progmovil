import { z } from 'zod';
import { ProductQuestionCreateNestedOneWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionCreateNestedOneWithoutQuestionRepliesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyCreateInput> = z
  .object({
    text: z.string(),
    createdAt: z.coerce.date(),
    productQuestion: z.lazy(
      () =>
        ProductQuestionCreateNestedOneWithoutQuestionRepliesInputObjectSchema,
    ),
  })
  .strict();

export const QuestionReplyCreateInputObjectSchema = Schema;
