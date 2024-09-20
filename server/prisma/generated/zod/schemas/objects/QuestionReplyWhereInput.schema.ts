import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProductQuestionRelationFilterObjectSchema } from './ProductQuestionRelationFilter.schema';
import { ProductQuestionWhereInputObjectSchema } from './ProductQuestionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionReplyWhereInputObjectSchema),
        z.lazy(() => QuestionReplyWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionReplyWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionReplyWhereInputObjectSchema),
        z.lazy(() => QuestionReplyWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    questionId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productQuestion: z
      .union([
        z.lazy(() => ProductQuestionRelationFilterObjectSchema),
        z.lazy(() => ProductQuestionWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const QuestionReplyWhereInputObjectSchema = Schema;
