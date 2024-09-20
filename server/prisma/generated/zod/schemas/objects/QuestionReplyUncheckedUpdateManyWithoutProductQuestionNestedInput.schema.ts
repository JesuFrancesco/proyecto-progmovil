import { z } from 'zod';
import { QuestionReplyCreateWithoutProductQuestionInputObjectSchema } from './QuestionReplyCreateWithoutProductQuestionInput.schema';
import { QuestionReplyUncheckedCreateWithoutProductQuestionInputObjectSchema } from './QuestionReplyUncheckedCreateWithoutProductQuestionInput.schema';
import { QuestionReplyCreateOrConnectWithoutProductQuestionInputObjectSchema } from './QuestionReplyCreateOrConnectWithoutProductQuestionInput.schema';
import { QuestionReplyUpsertWithWhereUniqueWithoutProductQuestionInputObjectSchema } from './QuestionReplyUpsertWithWhereUniqueWithoutProductQuestionInput.schema';
import { QuestionReplyWhereUniqueInputObjectSchema } from './QuestionReplyWhereUniqueInput.schema';
import { QuestionReplyUpdateWithWhereUniqueWithoutProductQuestionInputObjectSchema } from './QuestionReplyUpdateWithWhereUniqueWithoutProductQuestionInput.schema';
import { QuestionReplyUpdateManyWithWhereWithoutProductQuestionInputObjectSchema } from './QuestionReplyUpdateManyWithWhereWithoutProductQuestionInput.schema';
import { QuestionReplyScalarWhereInputObjectSchema } from './QuestionReplyScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyUncheckedUpdateManyWithoutProductQuestionNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              QuestionReplyUpsertWithWhereUniqueWithoutProductQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionReplyUpsertWithWhereUniqueWithoutProductQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionReplyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              QuestionReplyUpdateWithWhereUniqueWithoutProductQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionReplyUpdateWithWhereUniqueWithoutProductQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              QuestionReplyUpdateManyWithWhereWithoutProductQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionReplyUpdateManyWithWhereWithoutProductQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => QuestionReplyScalarWhereInputObjectSchema),
          z.lazy(() => QuestionReplyScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionReplyUncheckedUpdateManyWithoutProductQuestionNestedInputObjectSchema =
  Schema;
