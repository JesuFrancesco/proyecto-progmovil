import { z } from 'zod';
import { QuestionReplyCreateWithoutProductQuestionInputObjectSchema } from './QuestionReplyCreateWithoutProductQuestionInput.schema';
import { QuestionReplyUncheckedCreateWithoutProductQuestionInputObjectSchema } from './QuestionReplyUncheckedCreateWithoutProductQuestionInput.schema';
import { QuestionReplyCreateOrConnectWithoutProductQuestionInputObjectSchema } from './QuestionReplyCreateOrConnectWithoutProductQuestionInput.schema';
import { QuestionReplyWhereUniqueInputObjectSchema } from './QuestionReplyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyCreateNestedManyWithoutProductQuestionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => QuestionReplyCreateWithoutProductQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionReplyCreateWithoutProductQuestionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              QuestionReplyUncheckedCreateWithoutProductQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionReplyUncheckedCreateWithoutProductQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              QuestionReplyCreateOrConnectWithoutProductQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionReplyCreateOrConnectWithoutProductQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionReplyCreateNestedManyWithoutProductQuestionInputObjectSchema =
  Schema;
