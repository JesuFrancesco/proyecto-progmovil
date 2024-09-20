import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUncheckedCreateWithoutQuestionRepliesInput> =
  z
    .object({
      id: z.number().optional(),
      text: z.string(),
      createdAt: z.coerce.date(),
      productId: z.number(),
      userId: z.number(),
    })
    .strict();

export const ProductQuestionUncheckedCreateWithoutQuestionRepliesInputObjectSchema =
  Schema;
