import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyUncheckedCreateWithoutProductQuestionInput> =
  z
    .object({
      id: z.number().optional(),
      text: z.string(),
      createdAt: z.coerce.date(),
    })
    .strict();

export const QuestionReplyUncheckedCreateWithoutProductQuestionInputObjectSchema =
  Schema;
