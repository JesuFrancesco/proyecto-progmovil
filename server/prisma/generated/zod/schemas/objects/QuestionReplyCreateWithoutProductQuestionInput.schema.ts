import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyCreateWithoutProductQuestionInput> =
  z
    .object({
      text: z.string(),
      createdAt: z.coerce.date(),
    })
    .strict();

export const QuestionReplyCreateWithoutProductQuestionInputObjectSchema =
  Schema;
