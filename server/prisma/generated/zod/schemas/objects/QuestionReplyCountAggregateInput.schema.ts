import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    text: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    questionId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const QuestionReplyCountAggregateInputObjectSchema = Schema;
