import { z } from 'zod';
import { QuestionReplyWhereUniqueInputObjectSchema } from './QuestionReplyWhereUniqueInput.schema';
import { QuestionReplyUpdateWithoutProductQuestionInputObjectSchema } from './QuestionReplyUpdateWithoutProductQuestionInput.schema';
import { QuestionReplyUncheckedUpdateWithoutProductQuestionInputObjectSchema } from './QuestionReplyUncheckedUpdateWithoutProductQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyUpdateWithWhereUniqueWithoutProductQuestionInput> =
  z
    .object({
      where: z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => QuestionReplyUpdateWithoutProductQuestionInputObjectSchema,
        ),
        z.lazy(
          () =>
            QuestionReplyUncheckedUpdateWithoutProductQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionReplyUpdateWithWhereUniqueWithoutProductQuestionInputObjectSchema =
  Schema;
