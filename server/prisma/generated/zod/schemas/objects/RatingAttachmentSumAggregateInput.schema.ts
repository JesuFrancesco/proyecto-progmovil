import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentSumAggregateInputType> = z
  .object({
    ratingId: z.literal(true).optional(),
  })
  .strict();

export const RatingAttachmentSumAggregateInputObjectSchema = Schema;
