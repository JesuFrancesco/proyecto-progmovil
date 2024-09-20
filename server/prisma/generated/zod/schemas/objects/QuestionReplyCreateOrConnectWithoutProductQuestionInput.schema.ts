import { z } from 'zod';
import { QuestionReplyWhereUniqueInputObjectSchema } from './QuestionReplyWhereUniqueInput.schema';
import { QuestionReplyCreateWithoutProductQuestionInputObjectSchema } from './QuestionReplyCreateWithoutProductQuestionInput.schema';
import { QuestionReplyUncheckedCreateWithoutProductQuestionInputObjectSchema } from './QuestionReplyUncheckedCreateWithoutProductQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyCreateOrConnectWithoutProductQuestionInput> =
  z
    .object({
      where: z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema),
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

export const QuestionReplyCreateOrConnectWithoutProductQuestionInputObjectSchema =
  Schema;
