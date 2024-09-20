import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentUncheckedCreateInput> = z
  .object({
    blobUrl: z.string(),
    filename: z.string(),
    type: z.string(),
    ratingId: z.number(),
  })
  .strict();

export const RatingAttachmentUncheckedCreateInputObjectSchema = Schema;
