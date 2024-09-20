import { z } from 'zod';
import { QuestionReplyWhereUniqueInputObjectSchema } from './QuestionReplyWhereUniqueInput.schema';
import { QuestionReplyUpdateWithoutProductQuestionInputObjectSchema } from './QuestionReplyUpdateWithoutProductQuestionInput.schema';
import { QuestionReplyUncheckedUpdateWithoutProductQuestionInputObjectSchema } from './QuestionReplyUncheckedUpdateWithoutProductQuestionInput.schema';
import { QuestionReplyCreateWithoutProductQuestionInputObjectSchema } from './QuestionReplyCreateWithoutProductQuestionInput.schema';
import { QuestionReplyUncheckedCreateWithoutProductQuestionInputObjectSchema } from './QuestionReplyUncheckedCreateWithoutProductQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyUpsertWithWhereUniqueWithoutProductQuestionInput> =
  z
    .object({
      where: z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => QuestionReplyUpdateWithoutProductQuestionInputObjectSchema,
        ),
        z.lazy(
          () =>
            QuestionReplyUncheckedUpdateWithoutProductQuestionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => QuestionReplyCreateWithoutProductQuestionInputObjectSchema,
        ),
        z.lazy(
          () =>
            QuestionReplyUncheckedCreateWithoutProductQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionReplyUpsertWithWhereUniqueWithoutProductQuestionInputObjectSchema =
  Schema;
