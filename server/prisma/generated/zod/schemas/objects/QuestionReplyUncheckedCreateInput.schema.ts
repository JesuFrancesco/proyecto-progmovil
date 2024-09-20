import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    text: z.string(),
    createdAt: z.coerce.date(),
    questionId: z.number(),
  })
  .strict();

export const QuestionReplyUncheckedCreateInputObjectSchema = Schema;
