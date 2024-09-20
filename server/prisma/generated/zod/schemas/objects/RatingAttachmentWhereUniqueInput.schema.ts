import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentWhereUniqueInput> = z
  .object({
    ratingId: z.number().optional(),
  })
  .strict();

export const RatingAttachmentWhereUniqueInputObjectSchema = Schema;
