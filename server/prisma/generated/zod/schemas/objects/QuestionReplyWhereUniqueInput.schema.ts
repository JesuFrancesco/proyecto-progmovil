import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionReplyWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const QuestionReplyWhereUniqueInputObjectSchema = Schema;
