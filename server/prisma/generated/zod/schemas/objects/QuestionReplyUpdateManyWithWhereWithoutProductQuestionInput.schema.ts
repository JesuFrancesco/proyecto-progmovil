import { z } from 'zod';
import { QuestionReplyScalarWhereInputObjectSchema } from './QuestionReplyScalarWhereInput.schema';
import { QuestionReplyUpdateManyMutationInputObjectSchema } from './QuestionReplyUpdateManyMutationInput.schema';
import { QuestionReplyUncheckedUpdateManyWithoutQuestionRepliesInputObjectSchema } from './QuestionReplyUncheckedUpdateManyWithoutQuestionRepliesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyUpdateManyWithWhereWithoutProductQuestionInput> =
  z
    .object({
      where: z.lazy(() => QuestionReplyScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionReplyUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            QuestionReplyUncheckedUpdateManyWithoutQuestionRepliesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionReplyUpdateManyWithWhereWithoutProductQuestionInputObjectSchema =
  Schema;
