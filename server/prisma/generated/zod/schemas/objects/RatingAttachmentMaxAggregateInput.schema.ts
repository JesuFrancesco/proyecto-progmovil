import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentMaxAggregateInputType> = z
  .object({
    blobUrl: z.literal(true).optional(),
    filename: z.literal(true).optional(),
    type: z.literal(true).optional(),
    ratingId: z.literal(true).optional(),
  })
  .strict();

export const RatingAttachmentMaxAggregateInputObjectSchema = Schema;
