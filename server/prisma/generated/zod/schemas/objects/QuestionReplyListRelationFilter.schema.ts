import { z } from 'zod';
import { QuestionReplyWhereInputObjectSchema } from './QuestionReplyWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyListRelationFilter> = z
  .object({
    every: z.lazy(() => QuestionReplyWhereInputObjectSchema).optional(),
    some: z.lazy(() => QuestionReplyWhereInputObjectSchema).optional(),
    none: z.lazy(() => QuestionReplyWhereInputObjectSchema).optional(),
  })
  .strict();

export const QuestionReplyListRelationFilterObjectSchema = Schema;
